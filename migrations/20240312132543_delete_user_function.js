/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.raw(`
      CREATE OR REPLACE FUNCTION public.delete_user(p_user_id INTEGER)
      RETURNS BOOLEAN
      LANGUAGE plpgsql
      AS $function$
      DECLARE
        user_exists BOOLEAN;
      BEGIN
        -- Check if the user exists based on the provided ID in the Users table
        SELECT EXISTS (
          SELECT 1
          FROM "users"
          WHERE id = p_user_id
        ) INTO user_exists;
  
        IF user_exists THEN
          -- Delete the corresponding entry from the Users_Credentials table
          DELETE FROM "users_credentials"
          WHERE user_id = p_user_id;

          -- Delete the corresponding entry from the Users_Credentials table
          DELETE FROM "users_roles"
          WHERE user_id = p_user_id;
  
          -- Delete the user from the Users table
          DELETE FROM "users"
          WHERE id = p_user_id;
  
          RETURN true; -- Deletion successful
        ELSE
          RETURN false; -- User not found
        END IF;
      END;
      $function$;
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.raw('DROP FUNCTION IF EXISTS public.delete_user(p_user_id INTEGER)');
};
