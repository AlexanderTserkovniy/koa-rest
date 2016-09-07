/**
 * Created by Oleksandr Tserkovnyi on 4/25/16.
 * kemperomg@gmail.com
 */
'use strict';

let mongoose = require('mongoose');

let User = require('db/User.js');

mongoose.connect(`mongodb://localhost/koa${process.env.NODE_ENV === 'test' ? '-test' : ''}`);

module.exports = function* (next) {
  this.app.context.mongoose = mongoose;
  this.app.context.db = {
    db: mongoose.connection.db,
    User
  };
  yield next;
};