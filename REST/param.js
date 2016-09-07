/**
 * Created by Oleksandr Tserkovnyi on 4/25/16.
 * kemperomg@gmail.com
 */

module.exports = (router, app) => {
  router.param('userById', function* (id, next) {
    if (!app.context.mongoose.Types.ObjectId.isValid(id)) {
      this.throw(404);
    }

    this.userById = yield app.context.db.User.findById(id);

    if (!this.userById) {
      this.throw(404);
    }

    yield* next;
  })
};