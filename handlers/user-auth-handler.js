const { authUser, resetPassword, logoutUser } = require('../controller/user-auth.controller');
const { readJson } = require('../helpers/dataHelper.js');

async function handleUserAuthentication(res, req) {
    readJson(res, async (userCredentials) => {
        try {
            const authenticatedUser = await authUser(userCredentials);
            res.cork(() => {
                if (typeof authenticatedUser === 'string') {
                    res.end(JSON.stringify({ error: authenticatedUser }));
                } else {
                    res.end(JSON.stringify(authenticatedUser));
                }
            });
        } catch (error) {
            res.cork(() => {
                res.end(JSON.stringify({ error: 'Authentication failed' }));
            });
        }
    }, () => {
        res.cork(() => {
            res.end(JSON.stringify({ error: 'Invalid JSON or no data at all!' }));
        });
    });
}

async function handlePasswordReset(res, req) {
    readJson(res, async (passwordData) => {
        try {
            const result = await resetPassword(passwordData);
            res.cork(() => {
                if (typeof result === 'string') {
                    res.end(JSON.stringify({ error: result }));
                } else {
                    res.end(JSON.stringify(result));
                }
            });
        } catch (error) {
            res.cork(() => {
                res.end(JSON.stringify({ error: 'Password reset failed' }));
            });
        }
    }, () => {
        res.cork(() => {
            res.end(JSON.stringify({ error: 'Invalid JSON or no data at all!' }));
        });
    });
}

async function handleLogout(res, req) {
    readJson(res, async (userCredentials) => {
        res.onAborted(() => {
            res.aborted = true;
        });
        const logoutResult = await logoutUser(userCredentials);

        if (!res.aborted) {
            res.cork(() => {
                if (logoutResult.success) {
                    res.end(JSON.stringify(logoutResult));
                } else {
                    res.end(JSON.stringify({ error: logoutResult.error }));
                }
            });

        }
    })
}

module.exports = {
    handleUserAuthentication,
    handlePasswordReset,
    handleLogout
};