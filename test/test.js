require('dotenv').config();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const mongoose = require('mongoose');
const request = require('request-promise');
const userController = require('../db/controllers/user');

// THIS CURRENTLY ASSUMES A SEEDED DB

describe('Database', function() {
  describe('Users', function() {
    it('Helper should return a user object given the user exists', function() {
      let userPromise = userController.getUser('Octodog');
      return Promise.all([
        expect(userPromise).to.eventually.have.property('name'),
        expect(userPromise).to.eventually.have.property('bio'),
        expect(userPromise).to.eventually.have.property('password'),
        expect(userPromise).to.eventually.have.property('users_blocked'),
        expect(userPromise).to.eventually.have.property('comments'),
        expect(userPromise).to.eventually.have.property('itineraries')
      ]);
    });

    xit('Helper should return an error if the given user does not exist', function() {
      let userPromise = userController.getUser('Octocat');
      return expect(userPromise).to.be.rejected;
    });
  });

  after(function() {
    mongoose.disconnect();
  });
});

describe('Server', function() {
  describe('Users', function() {
    xit('GET should return a user object given the user exists', function() {
      return request(`http://localhost:${process.env.PORT}/api/users/Octodog`).then(function(user) {
        let parsedUser = Promise.resolve(JSON.parse(user));
        return Promise.all([
          expect(parsedUser).to.eventually.have.property('name'),
          expect(parsedUser).to.eventually.have.property('bio'),
          expect(parsedUser).to.eventually.have.property('password'),
          expect(parsedUser).to.eventually.have.property('users_blocked'),
          expect(parsedUser).to.eventually.have.property('comments'),
          expect(parsedUser).to.eventually.have.property('itineraries')
        ]);
      });  
    });

    xit('GET should return an error if the given user does not exist', function() {
      expect(1).to.equal(1);
    });

  });

  after(function() {
    mongoose.disconnect();
  });
});
