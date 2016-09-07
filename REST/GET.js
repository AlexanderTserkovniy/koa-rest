/**
 * Created by Oleksandr Tserkovnyi on 4/25/16.
 * kemperomg@gmail.com
 */

'use strict';

module.exports = (router, app) => {
  router.get('/:userById', function* (userById, next) {
    this.body = this.userById.toObject();
  });

  router.get('/', function* (next) {
    this.body = yield app.context.db.User.find({});
  });
};