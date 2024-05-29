const QUERY_STRING = {
    CREATE_USER : 'SELECT public.create_user($1, $2, $3, $4, $5)',
    GET_USER_BY_ID: 'SELECT * FROM user_view WHERE id = $1',
    GET_MASTER_OPERATOR: 'SELECT * FROM user_view WHERE position = $1',
    GET_ALL_USER: 'SELECT * FROM user_view',
    GET_USER_PAGINATED: 'SELECT * FROM public.get_users_paginated($1, $2)',
    UPDATE_USER: 'SELECT update_user($1, $2, $3, $4, $5)',
    DELETE_USER: 'SELECT delete_user($1)',
    GET_CREDENTIAL: 'SELECT * FROM public.get_user_credentials($1);',
    HAS_ACTIVE_SESS: 'SELECT * FROM "users_sessionTokens" WHERE user_id = $1;',
    SAVE_SESSION_TOKEN: 'INSERT INTO "users_sessionTokens" (user_id, token, created_at) VALUES ($1, $2, NOW());',
    LOG_AUTH_SUCCESS: `INSERT INTO "users_authenticationLogs" (user_id, status, log_timestamp) VALUES ($1, 'success', NOW());`,
    LOG_AUTH_FAILED: `INSERT INTO "users_authenticationLogs" (user_id, status, log_timestamp) VALUES (NULL, 'failure', NOW());`,
    USER_LOGOUT: `DELETE FROM "users_sessionTokens" WHERE user_id = $1 AND token = $2;`,
    RESET_PASS: 'SELECT public.reset_password($1, $2)',
    GET_USER_ROLE_BY_ID: 'SELECT * FROM users_roles WHERE user_id = $1',
    INSERT_USER_ROLE: `INSERT INTO "users_roles" (user_id, breakdown, production, timeentry, coalhauling, weather) VALUES 
    ($1, $2, $3, $4, $5, $6, NOW(), NOW())`
}

module.exports = {
    QUERY_STRING
}