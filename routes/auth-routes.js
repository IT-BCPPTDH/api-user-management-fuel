// auth-routes.js
const authHandler = require('../handlers/user-auth-handler');

module.exports = (app) => {
  app.post('/user-auth', (res, req) => authHandler.handleUserAuthentication(res, req));
  app.post('/user-reset-password', (res, req) => authHandler.handlePasswordReset(res, req));
  app.post('/user-logout', (res, req) => authHandler.handleLogout(res, req));
};
