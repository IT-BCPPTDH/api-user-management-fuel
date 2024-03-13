const { authUser, resetPassword, logoutUser } = require('../controller/user-auth.controller');
const { handleResponseJson } = require('./response-handler.js')

async function handleUserAuthentication(res, req) {
    await handleResponseJson(res, req, authUser);
}

async function handlePasswordReset(res, req) {
    await handleResponseJson(res, req, resetPassword);
}

async function handleLogout(res, req) {
    await handleResponseJson(res, req, logoutUser);
}

module.exports = {
    handleUserAuthentication,
    handlePasswordReset,
    handleLogout
};