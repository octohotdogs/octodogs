require('dotenv').config();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

const mongoose = require('mongoose');
const request = require('request-promise');
const userController = require('../db/controllers/user');

userController.getUser('Octodog').then(function(user) {
  console.log('HERE IS A USER', user);
});

userController.getUserId('Octodog').then(function(id) {
  console.log('HERE IS A USER ID', id);
});

/*
// THIS CURRENTLY ASSUMES A SEEDED DB

describe('Database', function() {
  describe('Users', function() {
    it('Helper should return a user object given the user exists', function() {
      userController.getUser('Octodog').then(function(user) {
        console.log('THIS MY USER', user);
        expect(user).to.have.property('name');
      });
      // let userPromise = userController.getUser('Octodog');
      // return expect(userController.getUser('Octodog')).to.eventually.have.property('name');
      // expect(userPromise).to.eventually.have.property('name');
      // expect(userPromise).to.eventually.have.property('bio');
      // expect(userPromise).to.eventually.have.property('password');
      // expect(userPromise).to.eventually.have.property('users_blocked');
      // expect(userPromise).to.eventually.have.property('comments');
      // expect(userPromise).to.eventually.have.property('itineraries');
    });

    xit('Helper should return an error if the given user does not exist', function() {
      let userPromise = userController.getUser('Octocat');
      expect(userPromise).to.eventually.have.property('name');
      expect(userPromise).to.be.rejected;
    });
  });
});

xdescribe('Server', function() {
  describe('Users', function() {
    it('GET should return a user object given the user exists', function() {
      request('http://localhost:1337/api/users/Octodog').then(function(user) {
        let parsedUser = Promise.resolve(JSON.parse(user));
        expect(parsedUser).to.eventually.have.property('name');
        expect(parsedUser).to.eventually.have.property('bio');
        expect(parsedUser).to.eventually.have.property('password');
        expect(parsedUser).to.eventually.have.property('users_blocked');
        expect(parsedUser).to.eventually.have.property('comments');
        expect(parsedUser).to.eventually.have.property('itineraries');
        expect(parsedUser).to.eventually.have.property('BAD PROPERTY');
      });  
    });

    it('GET should return an error if the given user does not exist', function() {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
    });

  });
});
*/
mongoose.disconnect();
