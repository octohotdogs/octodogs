const express = require('express');
const router = express.Router();
//const controller = require('../../db/controllers/itinerary.js');

router.route('/')
  .post(function(req, res) {
    // TODO: This should save a new itinerary to the database
    res.send('POST on /api/itineraries');
  });

router.route('/:itinid')
  .get(function(req, res) {
    let itinId = req.params.itinid;
    // TODO: This should get an itinerary by its ID
    res.send('GET on /api/itineraries/' + itinId);
  });

router.route('/:itinid')
  .post(function(req, res) {
    let itinId = req.params.itinid;
    // TODO: This should update an itinerary
    // (should we use POST or PUT for this?)
    res.send('POST on /api/itineraries/' + itinId);
  });

router.route('/:itinid/stops')
  .get(function(req, res) {
    let itinId = req.params.itinid;
    // TODO: This should get all stops in an itinerary
    res.send('GET on /api/itineraries/' + itinId + '/stops');
  });

router.route('/:itinid/stops')
  .post(function(req, res) {
    let itinId = req.params.itinid;
    // TODO: This should save a new stop to an itinerary
    res.send('POST on /api/itineraries/' + itinId + '/stops');
  });

// TODO: Some kind of route to update a stop? Maybe PUT on /:itinid/stops

module.exports = router;