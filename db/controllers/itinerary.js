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

var getItineraryId = function(name) {
  return new Promise(function(resolve, reject) {
    db.Itinerary.findOne({ name: name }).select('_id').exec()
      .then(function(id) {
        resolve(id._id);
      })
      .catch(function(err) {
        reject(err);
      });
  });
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
 console.log("itinerary", itinerary);

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

// Save new stop
/* stop must be of the format of: {
    name: String,
    location: {
      lat: Number,
      lng: Number,
      place_id: String,
    },
    date: Date,
    notes: String,
  }
*/

var saveNewStop = function(itinID, stop, callback) {
  stop.comments = [];
  db.Itinerary.findOneAndUpdate({ '_id': itinID }, { $push: {stops: stop} }, { new: true })
    .then(function(updatedItin) {
      callback(null, updatedItin);
    })
    .catch(function(err) {
      callback(err, null);
    });
};

module.exports = {
  getItineraryById: getItineraryById,
  getItineraryStops: getItineraryStops,
  saveNewItinerary: saveNewItinerary,
  saveNewStop: saveNewStop
};