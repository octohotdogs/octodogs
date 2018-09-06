var data = require('./seed_data.js');
var mongoose = require('mongoose');
var db = require('./db/index.js');
var Promise = require('bluebird');
mongoose.Promise = require('bluebird');

// If reseeding, be sure to drop the pre-existing databases first to avoid duplicates!

var saveUsers = function(users) {
  var saves = users.map(function(user) {
    return new Promise(function(resolve, reject) {
      db.User.create(user, function(err, entry) {
        if (err) {
          reject(err);
        }
        entry.save(function(err) {
          if (err) {
            reject(err);
          }
          console.log('saving user ' + user.name);
          resolve(true);
        });
      });
    });
  });
  return new Promise.all(saves);
};

var getUserId = function(username) {
  return new Promise(function(resolve, reject) {
    db.User.find({ name: username }).select('_id').exec()
      .then(function(id) {
        resolve(id[0]['_id']);
      })
      .catch(function(err) {
        reject(err);
      });
  });
};

var saveItineraries = function(itineraries, userId) {
  var saves = itineraries.map(function(itinerary) {
    return new Promise(function(resolve, reject) {
      itinerary.user = userId;
      db.Itinerary.create(itinerary, function(err, entry) {
        if (err) {
          reject(err);
        }
        entry.save(function(err) {
          if (err) {
            reject(err);
          }
          console.log('saving itinerary ' + itinerary.name);
          resolve(true);
        });
      });
    });
  });
  return new Promise.all(saves);
};

var getItinIds = function(itinNames) {
  var retrieves = itinNames.map(function(name) {
    return new Promise(function(resolve, reject) {
      db.Itinerary.find({ name: name }).select('_id').exec()
      .then(function(id) {
        resolve(id[0]['_id']);
      })
      .catch(function(err) {
        reject(err);
      });
    });
  });
  return new Promise.all(retrieves);
};

var saveItinIdsToUser = function(itinIds, userId) {
  return new Promise(function(resolve, reject) {
    db.User.findById(userId, function(err, user) {
      if (err) {
        reject(err);
      }
      user.set({ itineraries: itinIds });
      user.save(function(err) {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  });
};

var octoUserId = null;

saveUsers(data.users)
  .then(function() {
    return getUserId('Octodog');
  })
  .then(function(userId) {
    octoUserId = userId;
    return saveItineraries(data.itineraries, userId);
  })
  .then(function() {
    return getItinIds(data.itineraries.map((itinerary) => itinerary.name));
  })
  .then(function(itinIds) {
    return saveItinIdsToUser(itinIds, octoUserId);
  })
  .then(function() {
    mongoose.disconnect();
  })
  .catch(function(error) {
    return console.error(error);
  });