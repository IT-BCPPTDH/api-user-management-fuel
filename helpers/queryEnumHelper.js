const QUERY_STRING = {
    CREATE_USER : 'SELECT public.create_user($1, $2, $3, $4, $5)',
    GET_USER_BY_ID: 'SELECT * FROM user_view WHERE id = $1',
    GET_MASTER_OPERATOR: 'SELECT * FROM user_operator',
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
    GET_USER_ROLE_BY_ID: 'SELECT * FROM users_roles WHERE id = $1',

    GET_ALL_USER_ROLES: 'SELECT * FROM users_roles',

    GET_USER_JDE: 'SELECT * FROM public.get_user_jde($1)',
    GET_USER_BY_JDE: 'SELECT "JDE", fullname FROM public.users WHERE fullname LIKE ANY ($1)',
    GET_USER_ROLE_BY_ID: 'SELECT * FROM users_roles WHERE user_id = $1',
    INSERT_USER_ROLE: `INSERT INTO "users_roles" (user_id, breakdown, production, timeentry, coalhauling, weather) VALUES 
    ($1, $2, $3, $4, $5, $6, NOW(), NOW())`,
    
    GET_USER_FUEL: `select u.id, u."JDE", u.fullname, u."position", u.division, ur.fuelman, ur.admin_fuel from users u 
    join users_roles ur on u.id = ur.user_id 
    where  ur.is_operator_fuel = true `,

    GET_USER_FUEL_ADMIN: `select u.id, u."JDE", u.fullname, u."position", u.division, ur.fuelman, ur.admin_fuel from users u 
    join users_roles ur on u.id = ur.user_id 
    where  ur.fuelman = true or ur.admin_fuel = true`,

    GET_OPERATOR_JDE: 'SELECT * FROM users where "JDE" = $1',
}

module.exports = {
    QUERY_STRING
}