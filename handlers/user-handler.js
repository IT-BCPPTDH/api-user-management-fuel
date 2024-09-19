const { 
    getUser, 
    getAllUsers,
    createUser, 
    updateUser, 
    deleteUser, 
    getUsersPaginated, 
    bulkInsert,
    updateRoles,
    getOperator,
    getUserJDE,
    updateOperator,
    getAllRoles,
    updateExistingRole,
    getUserFuel,
    createUserAndRole,
    updateFuelman
} = require('../controller/user-controller.js');

const { handleResponseJson, handleResponseParams } = require('./response-handler.js')

async function handleUserCreation(res, req) {
    await handleResponseJson(res, req, createUser);
}

async function handleUserUpdate(res, req) {
    await handleResponseJson(res, req, updateUser);
}

async function handleUserRetrieval(res, req) {
    await handleResponseParams(res, req, getUser, 1)
}

async function handleUserPagination(res, req) {
    await handleResponseParams(res, req, getUsersPaginated, 2)
}

async function handleUserDeletion(res, req) {
    await handleResponseParams(res, req, deleteUser, 1)
}

async function handleInsertBulkUser(res, req) {
    await handleResponseParams(res, req, bulkInsert, 0)
}

async function handleUserRetrievalAll(res, req) {
    await handleResponseParams(res, req, getAllUsers, 0)
}

async function handleRolesUpdate(res, req) {
    await handleResponseJson(res, req, updateRoles);
}

async function handleMasterOperator(res, req) {
    await handleResponseParams(res, req, getOperator, 0)
}

async function handleFetchJde(res, req) {
    await handleResponseJson(res, req, getUserJDE, 0)
}

async function handleUserUpdate(res, req) {
    await handleResponseJson(res, req, updateOperator, 0)
}

async function handleUserRolesAll(res, req) {
    await handleResponseParams(res, req, getAllRoles, 0)
}

async function handleUserUpdateExisting(res, req) {
    await handleResponseParams(res, req, updateExistingRole, 0)
}

async function handleGetUserFuel(res, req) {
    await handleResponseParams(res, req, getUserFuel, 0)
}

async function handleAddUserAndRole(res, req) {
    await handleResponseJson(res, req, createUserAndRole)
}

async function handleFuelEmployee(res, req) {
    await handleResponseJson(res, req, updateFuelman, 0)
}

module.exports = {
    handleUserCreation,
    handleUserUpdate,
    handleUserDeletion,
    handleUserRetrieval,
    handleUserPagination,
    handleInsertBulkUser,
    handleUserRetrievalAll,
    handleRolesUpdate,
    handleMasterOperator,
    handleFetchJde,
    handleUserUpdate,
    handleUserRolesAll,
    handleUserUpdateExisting,
    handleGetUserFuel,
    handleAddUserAndRole,
    handleFuelEmployee
};