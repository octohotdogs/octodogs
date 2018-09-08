var mongoose = require('mongoose');
var Promise = require('bluebird');
mongoose.Promise = require('bluebird');
var db = require('../index.js');

var getUserId = function(username) {
  return new Promise(function(resolve, reject) {
    db.User.findOne({ name: username }).select('_id').exec()
      .then(function(id) {
        resolve(id._id);
      })
      .catch(function(err) {
        reject(err);
      });
  });
};

var getUser = function(username) {
  return new Promise(function(resolve, reject) {
    userDB.getUserId(username)
    .then(function(userId) {
      console.log("user id", userId);
       db.User.findById(userId, 'name bio').exec()
      .then(function(results) {
        console.log("getUser: ", results)
        resolve(results);
      })
      .catch(function(err) {
        reject(err);
      });
    });
  });
};


var getUserItineraries = function(userId) {
  return new Promise(function(resolve,reject) {
    db.User.findById(userId).populate('itineraries').exec()
      .then(function(results) {
        console.log("user itineraries:", results);
        //per each get itinerary details
        resolve(results.itineraries);
      })
      .catch(function(err){
        reject(err);
      })
  })
};

var createUser = function(userData) {
  return new Promise(function(resolve, reject) {
    db.User.findOne({name: userData.name})
    .then(function(result){
      if (!result) {
        db.User.create(userData)
        .then(function(result){
          resolve(result);
        });
      } else {
        reject("User " + userData.name + " exists in the system.");
      }
    })
    .catch(function(err){
      reject(err);
    })
  });
};

var updateUser = function(userData) {
  return new Promise(function(resolve, reject) {
    db.User.findOne({name: userData.name})
    .then(function(user){
      if (!user) {
        resolve("User " + userData.name + " doesn't exist in the system.");
      } else {
        user.set(userData)
        .then(function(result) {
          user.save(function(result) {
            resolve("User updated.");
          });
        })
      }
    })
    .catch(function(err){
      reject(err);
    })
  });

};

module.exports = {
  getUserId: getUserId,
  getUser: getUser,
  getUserItineraries: getUserItineraries,
  createUser: createUser,
  updateUser: updateUser
};