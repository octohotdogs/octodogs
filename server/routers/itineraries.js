const express = require('express');
const router = express.Router();
const users = require('../../db/controllers/user.js');
const controller = require('../../db/controllers/itinerary.js');
const placesApi = require('../../helpers/places-api.js');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

// Save a new itinerary
/* Request bodies must be of the form:
   {username: String, itinerary: (see saveNewItinerary for details) }
*/
router.route('/')
  .post(jsonParser, function(req, res) {
    users.getUserId(req.body.username)
    .then(function(userId) {
      controller.saveNewItinerary(req.body.itinerary, userId, function(err, newItinerary) {
        if (err) {
          return console.error(err);
        }
        res.send(newItinerary);
      });
    })
    .catch(function(err) {
      return console.error(err);
    });
  });

// Get an itinerary by its ID
router.route('/:itinid')
  .get(function(req, res) {
    let itinId = req.params.itinid;
    controller.getItineraryById(itinId, function(err, result) {
      if (err) {
        return console.error(err);
      }
      res.send(result[0]);
    });
  });

router.route('/:itinid')
  .put(function(req, res) {
    let itinId = req.params.itinid;
    // TODO: This should update an itinerary non-stop information. Use PUT /:itinid/stops to save new stops
    // Uncomment the below and delete the extra res.send when the controller is ready.
    /*
    controller.updateItineraryInfo(itinId, update, function(err, result) {
      if (err) {
        return console.error(err);
      }
      res.send('Itinerary updated.'); // change as needed
    */
    res.send('PUT on /api/itineraries/' + itinId); // DELETE ME WHEN DONE
  });

// Get all stops in an itinerary
router.route('/:itinid/stops')
  .get(function(req, res) {
    let itinId = req.params.itinid;
    controller.getItineraryById(itinId, function(err, result) {
      if (err) {
        return console.error(err);
      }
      res.send(result[0].stops);
    });
  });

// Save a new stop to the itinerary
/* Request bodies must be of the form
   { stop: (see saveNewStop in the controllers file for more info) }
*/
router.route('/:itinid/stops')
  .put(jsonParser, function(req, res) {
    let itinId = req.params.itinid;
    let stop = req.body.stop;
    let query = req.body.stop.name;
    /*
    placesApi.getPlacesData(query, function(result) {
      stop.location = result;
      console.log(stop);
      //res.send(true);
    });


/*
      stop.location = { lat: 47.6205063,
     lng: -122.3492774,
     place_id: '2d3d3592254d212ad01ce51620be345b480df9bb' };
      console.log(stop);
      controller.saveNewStop(itinId, stop, function(err, updatedItinerary) {
        if (err) {
          return console.error(err);
        }
        res.send(updatedItinerary);
      });
 /*
    */
    placesApi.getPlacesData(query, function(result) {
      stop.location = result;
      console.log(stop);
      controller.saveNewStop(itinId, stop, function(err, updatedItinerary) {
        if (err) {
          return console.error(err);
        }
        res.send(updatedItinerary);
      });
    });
  });

// TODO: Some kind of route to update a stop? Maybe PUT on /:itinid/stops/:index




module.exports = router;