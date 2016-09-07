/**
 * Created by Oleksandr Tserkovnyi on 4/25/16.
 * kemperomg@gmail.com
 */

// Parse application/json, application/x-www-form-urlencoded
// NOT form/multipart!
var bodyParser = require('koa-bodyparser');
module.exports = bodyParser();