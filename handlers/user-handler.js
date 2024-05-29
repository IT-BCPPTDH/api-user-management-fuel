const { 
    getUser, 
    getAllUsers,
    createUser, 
    updateUser, 
    deleteUser, 
    getUsersPaginated, 
    bulkInsert,
    updateRoles
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
    await handleResponseJson(res, req, updateRoles,1);
}

module.exports = {
    handleUserCreation,
    handleUserUpdate,
    handleUserDeletion,
    handleUserRetrieval,
    handleUserPagination,
    handleInsertBulkUser,
    handleUserRetrievalAll,
    handleRolesUpdate
};