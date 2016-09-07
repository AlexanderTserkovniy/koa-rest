/**
 * Created by Oleksandr Tserkovnyi on 4/25/16.
 * kemperomg@gmail.com
 */


module.exports = function* (next) {
  console.log('%s request to %s url', this.method, this.url);
  yield next;
  console.log('Response: ', this.response.status);
};