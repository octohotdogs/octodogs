const express = require('express');
const router = express.Router();

router.route('/')
  .post(function(req, res) {
    // TODO: This should save a new user to the database
    res.send('POST on /api/users');
  });

router.route('/:userid')
  .get(function(req, res) {
    let userId = req.params.userid;
    // TODO: This should get a user's information by their ID
    res.send('GET on /api/users/' + userId);
  });

router.route('/:userid')
  .post(function(req, res) {
    let userId = req.params.userid;
    // TODO: This should update a user's information
    // (should we use POST or PUT for this?)
    res.send('POST on /api/users/' + userId);
  });

router.route('/:userid/itineraries')
  .get(function(req, res) {
    let userId = req.params.userid;
    // TODO: This should get all itineraries by a certain user
    res.send('GET on /api/users/' + userId + '/itineraries');
  });

module.exports = router;

