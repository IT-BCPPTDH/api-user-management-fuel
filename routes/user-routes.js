// user-routes.js
const userHandler = require('../handlers/user-handler');

module.exports = (app) => {
  app.post('/api-user/create', (res, req) => userHandler.handleUserCreation(res, req));
  app.get('/api-user/get/:userId', (res, req) => userHandler.handleUserRetrieval(res, req));
  app.get('/api-user/get-all', (res, req) => userHandler.handleUserRetrievalAll(res, req));
  app.get('/api-user/paginate/:pageNum/:pageSize', (res, req) => userHandler.handleUserPagination(res, req));
  app.put('/api-user/update/:userId', (res, req) => userHandler.handleUserUpdate(res, req));
  app.put('/api-user/update-roles', (res, req) => userHandler.handleRolesUpdate(res, req));
  app.del('/api-user/delete/:userId', (res, req) => userHandler.handleUserDeletion(res, req));
  app.get('/api-user/bulk-insert', (res, req) => userHandler.handleInsertBulkUser(res,req))
  app.post('/api-user/get-jde', (res, req) => userHandler.handleFetchJde(res,req))
  app.put('/api-user/update-data', (res, req) => userHandler.handleUserUpdate(res, req));
  app.get('/api-user/get-all-roles', (res, req) => userHandler.handleUserRolesAll(res, req));
  app.get('/api-user/get-existing-roles', (res, req) => userHandler.handleUserUpdateExisting(res, req));
  app.get('/api-user/get-user-fuel', (res, req) => userHandler.handleGetUserFuel(res, req));
  app.post('/api-user/add-user-role', (res, req) => userHandler.handleAddUserAndRole(res, req));
  app.put('/api-user/update-fuel-employee', (res, req) => userHandler.handleFuelEmployee(res, req));
};
