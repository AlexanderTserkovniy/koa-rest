/**
 * Created by Oleksandr Tserkovnyi on 4/25/16.
 * kemperomg@gmail.com
 */

'use strict';

module.exports = (router, app) => {
  router.del('/:userById', function* (userById, next) {
    this.userById.remove();
    this.body = 'OK';
  });
};