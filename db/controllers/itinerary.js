var mongoose = require('mongoose');
var Promise = require('bluebird');
mongoose.Promise = require('bluebird');
var db = require('../index.js');

/*
  Callbacks must take an err and a result
  Example:

  var testLogger = function(err, data) {
    if (err) {
      return console.error(err);
    }
    console.log(data);
  };
*/

// Get all itineraries by a certain user. Requires user id, not username.
var getUserItineraries = function(userId, callback) {
  db.Itinerary.find({ user: userId }, callback);
};

// Get the itinerary that corresponds to a particular id
var getItineraryById = function(itinId, callback) {
  db.Itinerary.find({ '_id': itinId }, callback);
};

// Get only the stops for a certain itinerary
var getItineraryStops = function(itinId, callback) {
  db.Itinerary.find({ '_id': itinId }).select('stops').exec()
  .then(function(results) {
    var stops = results[0].stops;
    callback(null, stops);
  })
  .catch(function(err) {
    callback(err, null);
  });
};

// Save new itinerary
/* itinerary must be of the format of: {
    name: String,
    description: String,
    dates: {
      start: Date,
      end: Date,
    },
    privacy: String,
  }
*/
var saveNewItinerary = function(itinerary, userId, callback) {
  itinerary.user = userId; // this assumes the userId is an ObjectId, not a string!
  itinerary['created_at'] = new Date();
  itinerary['last_updated'] = new Date();
  itinerary.stops = [];

  var newlySavedItin = null;

  db.Itinerary.create(itinerary)
    .then(function(newItin) {
      return newItin.save();
    })
    .then(function(savedItin) {
      newlySavedItin = savedItin;
      var itinId = savedItin['_id'];
      return db.User.findOneAndUpdate({ '_id': userId }, {$push: {itineraries: itinId}});
    })
    .then(function() {
      callback(null, newlySavedItin);
    })
    .catch(function(err) {
      callback(err, null);
    });
};


module.exports = {
  getUserItineraries: getUserItineraries,
  getItineraryById: getItineraryById,
  getItineraryStops: getItineraryStops,
};