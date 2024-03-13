/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
exports.up = function (knex) {
    return knex.raw(`
    CREATE OR REPLACE FUNCTION public.reset_password(
      p_user_id INTEGER,
      p_password_hash VARCHAR(255)
    ) 
    RETURNS VARCHAR(255) 
    LANGUAGE plpgsql
    AS $function$
    BEGIN
      -- Update the password hash in the Users_Credentials table
      UPDATE "users_credentials"
      SET password_hash = p_password_hash,
          updated_at = NOW()
      WHERE user_id = p_user_id;
    
      IF FOUND THEN
        RETURN 'Password reset successful';
      ELSE
        RAISE EXCEPTION 'User not found for password reset';
      END IF;
    END;
    $function$;
    
    `);
  };
  
  /**
   * @param {import("knex").Knex} knex
   * @returns {Promise<void>}
   */
  exports.down = function (knex) {
    return knex.raw('DROP PROCEDURE IF EXISTS reset_password;');
  };
  