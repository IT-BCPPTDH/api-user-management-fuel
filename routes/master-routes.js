// user-routes.js
const userHandler = require('../handlers/user-handler');

module.exports = (app) => {
  app.get('/master/operator', (res, req) => userHandler.handleMasterOperator(res, req));
};
