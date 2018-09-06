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


saveUsers(data.users)
  .then(function() {
    return getUserId('Octodog');
  })
  .then(function(id) {
    return saveItineraries(data.itineraries, id);
  })
  .then(function() {
    mongoose.disconnect();
  })
  .catch(function(error) {
    return console.error(error);
  });