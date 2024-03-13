const { getUser, createUser, updateUser, deleteUser, getUsersPaginated, bulkInsert } = require('../controller/user-controller.js');
const { readJson } = require('../helpers/dataHelper.js');

function handleUserCreation(res, req) {
    readJson(res, async (userData) => {
        const newUser = await createUser(userData);
        res.cork(() => {
            if (typeof newUser === 'string') {
                console.error('Error creating user:', newUser);
                res.end(JSON.stringify({ error: newUser }));
            } else {
                res.end(JSON.stringify(newUser));
            }
        });
    }, () => {
        res.cork(() => {
            res.end(JSON.stringify({ error: 'Invalid JSON or no data at all!' }));
        });
    });
}

async function handleUserRetrieval(res, req) {
    const userId = req.getParameter(0);
    
      /* Can't return or yield from here without responding or attaching an abort handler */
    res.onAborted(() => {
        res.aborted = true;
    });

    /* Awaiting will yield and effectively return to C++, so you need to have called onAborted */
    const user = await getUser(userId);

    /* If we were aborted, you cannot respond */
    if (!res.aborted) {
        res.cork(() => {
            if (user) {
                res.end(JSON.stringify(user));
            } else {
                res.end(JSON.stringify({ error: 'User not found' }));
            }
        });
    }
}

async function handleUserPagination(res, req) {
    const pageNum = req.getParameter(0);
    const pageSize = req.getParameter(1);
    
    res.onAborted(() => {
        res.aborted = true;
    });

    const users = await getUsersPaginated(pageNum, pageSize);

    if (!res.aborted) {
        res.cork(() => {
            if (users) {
                res.end(JSON.stringify(users));
            } else {
                res.end(JSON.stringify({ error: 'Users not found' }));
            }
        });
    }
}

function handleUserUpdate(res, req) {
    const userId = req.getParameter(0);

    readJson(res, async(userData) => {
        const updatedUser = await updateUser(userId, userData);
        res.cork( () => {
            if (typeof updatedUser === 'string') {
                console.error('Error updating user:', updatedUser);
                res.end(JSON.stringify({ error: updatedUser }));
            } else {
                res.end(JSON.stringify(updatedUser));
            }
        });
    }, () => {
        res.cork(() => {
            res.end(JSON.stringify({ error: 'Invalid JSON or no data at all!' }));
        });
    });
}

async function handleUserDeletion(res, req) {
    const userId = req.getParameter(0);
    res.onAborted(() => {
        res.aborted = true;
    });

    const success = await deleteUser(userId);

    if (!res.aborted) {
        res.cork(() => {
            if (success) {
                res.end(JSON.stringify({ message: 'User deleted successfully' }));
            } else {
                res.end(JSON.stringify({ error: 'User not found or deletion failed' }));
            }
        });
    }
}

async function handleInsertBulkUser(res, req) {

    res.onAborted(() => {
        res.aborted = true;
    });

    const users = await bulkInsert();

    if (!res.aborted) {
        res.cork(() => {
            if (users) {
                res.end(JSON.stringify(users));
            } else {
                res.end(JSON.stringify({ error: 'Users not found' }));
            }
        });
    }
}

module.exports = {
    handleUserCreation,
    handleUserUpdate,
    handleUserDeletion,
    handleUserRetrieval,
    handleUserPagination,
    handleInsertBulkUser
};