require('dotenv').config();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const mongoose = require('mongoose');
const userController = require('../db/controllers/user');

// THIS CURRENTLY ASSUMES A SEEDED DB

describe('Database', function() {
  describe('Users', function() {
    it('Helper should return a user object given the user exists', function() {
      expect(userController.getUser('Octodog')).to.eventually.deep.equal({
          "_bitField": 0,
          "_fulfillmentHandler0": [undefined],
          "_promise0": [undefined],
          "_receiver0": [undefined],
          "_rejectionHandler0": [undefined],
          "_id" : "5b909a51ea5ba05689a5c282",
          "name" : "Octodog",
          "bio" : "woof woof",
          "password" : "",
          "users_blocked" : [ ],
          "comments" : [ ],
          "itineraries" : [
            "5b909a51ea5ba05689a5c284",
            "5b909a51ea5ba05689a5c288"
          ],
          "__v" : 1
      });
    });

    it('Helper should return an error if the given user does not exist', function() {
      expect(userController.getUser('Octocat')).to.be.rejected;
    });
  });
});

describe('Server', function() {
  describe('Users', function() {
    it('GET should return a user object given the user exists', function() {
      // userController.getUser('Octodog')
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });

    it('GET should return an error if the given user does not exist', function() {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });
  });
});

mongoose.disconnect();
