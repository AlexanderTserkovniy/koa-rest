/**
 * Created by Oleksandr Tserkovnyi on 4/25/16.
 * kemperomg@gmail.com
 */

'use strict';

let koa = require('koa');
let fs  = require('fs');
let path = require('path');
var Router = require('koa-router');
var router = new Router({ prefix: '/api/v1/users' });
let app = koa();

const MIDDLEWARES_PATH  = 'middlewares';
const REST_PATH         = 'REST';

// Load all middlewares
let middlewares = fs.readdirSync(MIDDLEWARES_PATH).sort();

middlewares.forEach(
  middleware =>
    app.use(require(path.join(__dirname, MIDDLEWARES_PATH, middleware)))
);

// Load REST
let rest = fs.readdirSync(REST_PATH);

rest.forEach(
  method => require(path.join(__dirname, REST_PATH, method))(router, app)
);

app.use(router.routes());

app.listen(3000);