/**
 * Created by Oleksandr Tserkovnyi on 4/25/16.
 * kemperomg@gmail.com
 */

'use strict';

// var mocha = require('mocha');
// var coMocha = require('co-mocha');
//
// coMocha(mocha);

const request = require('co-request');
const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/koa-test');

var User = require('../db/User');

describe('REST', function () {
  let user = {"email": "asfsa@asf.ru"};

  before(function* (){
    // load fixtures
    yield User.remove({});

    yield User.create({email: "a@b.ru"});
    yield User.create({email: "a@b2.ru"});
    yield User.create({email: "a@b3.ru"});
    yield User.create({email: "a@b4.ru"});
  });

  it('should create user by POST', function* () {
    let result = yield request(getURL(), {
      method: 'POST',
      json: true,
      body: user
    });
    result = result.body;

    result.should.containEql('email');
    result.email.should.be.equal(user.email);
  });
});

function getURL (path) {
  return `http://localhost:3000/api/v1/users${path || ''}`;
}