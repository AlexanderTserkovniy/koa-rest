/**
 * Created by Oleksandr Tserkovnyi on 4/25/16.
 * kemperomg@gmail.com
 */

// POST /users → create user (возможны ошибки 400)

'use strict';

module.exports = (router, app) => {
  router.post('/', function* (next) {
    let user = yield app.context.db.User.create({
      email: this.request.body.email
    });

    this.body = user.toObject();
  });
};