const express = require('express');
const router = express.Router();
const itinDB = require('../../db/controllers/itinerary.js');
const userDB = require('../../db/controllers/user.js');

router.route('/')
  .post(function(req, res) {
    // TODO: This should save a new user to the database
    //console.log("body:", req.body);
    userData = req.body;
    userDB.createUser(userData)
    .then(function(results){
      res.send(results);
    })
    .catch(function(err) {
      res.send(err);
    });
  });

router.route('/:username')
  .get(function(req, res) {
    let username = req.params.username;
    console.log("user");
    userDB.getUser(username)
    .then(function(result) {
      console.log("user", result);
      res.json(result);
    })
    .catch(function(err) {
      res.json(err);
  });
    // TODO: This should get a user's information by their username
});

router.route('/:username')
  .post(function(req, res) {
    let username = req.params.username;
    let userData = req.body;
    // TODO: This should update a user's information
    userDB.updateUser(userData)
    .then(function(results){
      res.send(results);
    })
    .catch(function(err) {
      res.send(err);
    });
  });

router.route('/:username/itineraries')
  .get(function(req, res) {
    // TODO: This should get all itineraries by a certain user
    let username = req.params.username;
    userDB.getUserId(username)
    .then(function(result){
      userDB.getUserItineraries(result)
      .then(function(result){
        res.json(result);
      })
    })
    .catch(function(err){
      console.log(err);
      res.send(err);
    });
  });

module.exports = router;

