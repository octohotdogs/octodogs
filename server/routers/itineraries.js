const express = require('express');
const router = express.Router();
const controller = require('../../db/controllers/itinerary.js');

router.route('/')
  .post(function(req, res) {
    // TODO: This should save a new itinerary to the database
    res.send('POST on /api/itineraries');
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
  .post(function(req, res) {
    let itinId = req.params.itinid;
    // TODO: This should update an itinerary
    // (should we use POST or PUT for this?)
    res.send('POST on /api/itineraries/' + itinId);
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

router.route('/:itinid/stops')
  .post(function(req, res) {
    let itinId = req.params.itinid;
    // TODO: This should save a new stop to an itinerary
    res.send('POST on /api/itineraries/' + itinId + '/stops');
  });

// TODO: Some kind of route to update a stop? Maybe PUT on /:itinid/stops

module.exports = router;