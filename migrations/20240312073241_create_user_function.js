/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.raw(`
    CREATE OR REPLACE FUNCTION public.create_user(
      p_jde character varying,
      p_fullname character varying,
      p_position character varying,
      p_division character varying,
      p_password_hash character varying
    ) 
    RETURNS integer 
    LANGUAGE plpgsql
    AS $function$
    DECLARE
      user_exists BOOLEAN;
      created_id integer;
    BEGIN
      -- Check if the user already exists based on the provided JDE in the Users table
      SELECT EXISTS (
        SELECT 1
        FROM "users"
        WHERE "JDE" = p_jde
      ) INTO user_exists;
    
      -- If the user with the provided JDE does not exist, proceed to create the user
      IF NOT user_exists THEN
        -- Insert the user into the Users table
        INSERT INTO "users" ("JDE", fullname, "position", "division", "created_at", "updated_at")
        VALUES (p_jde, p_fullname, p_position, p_division, NOW(), NOW())
        RETURNING id INTO created_id; -- Capture the generated ID in created_id
    
        -- Insert the user credentials into the Users_Credentials table
        INSERT INTO "users_credentials" (user_id, password_hash, created_at, updated_at)
        VALUES (created_id, p_password_hash, NOW(), NOW());
    
        RETURN created_id; -- Return the generated ID
      ELSE
        -- Throw an exception or handle the case where the user with the provided JDE already exists
        RAISE EXCEPTION 'User with JDE % already exists', p_jde;
        RETURN NULL; -- This line is optional, depending on your needs
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
    // You can implement the rollback logic here if needed
    return knex.raw('DROP PROCEDURE IF EXISTS create_user;');
};
