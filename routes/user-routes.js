// user-routes.js
const userHandler = require('../handlers/user-handler');

module.exports = (app) => {
  app.post('/user', (res, req) => userHandler.handleUserCreation(res, req));
  app.get('/user/:userId', (res, req) => userHandler.handleUserRetrieval(res, req));
  app.get('/user/:pageNum/:pageSize', (res, req) => userHandler.handleUserPagination(res, req));
  app.put('/user/:userId', (res, req) => userHandler.handleUserUpdate(res, req));
  app.del('/user/:userId', (res, req) => userHandler.handleUserDeletion(res, req));

  app.get('/bulk-insert', (res, req) => userHandler.handleInsertBulkUser(res,req))
};
