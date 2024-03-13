/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.raw(`
  CREATE OR REPLACE FUNCTION public.get_user_credentials(p_jde VARCHAR(255))
    RETURNS TABLE (
    user_id INTEGER,
    password_hash VARCHAR(255)
    )
    LANGUAGE plpgsql
    AS $function$
    BEGIN
    RETURN QUERY
    SELECT uc.user_id, uc.password_hash
    FROM users_credentials uc
    JOIN users u ON uc.user_id = u.id
    WHERE u."JDE" = p_jde;
    END;
    $function$;
  `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.raw('DROP VIEW IF EXISTS get_user_credentials;');
};
