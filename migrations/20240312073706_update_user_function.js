/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.raw(`
    CREATE OR REPLACE FUNCTION public.update_user(
      p_id INTEGER,
      p_JDE VARCHAR(255) DEFAULT NULL,
      p_fullname VARCHAR(255) DEFAULT NULL,
      p_position VARCHAR(255) DEFAULT NULL,
      p_division VARCHAR(255) DEFAULT NULL
    ) 
    RETURNS VOID 
    LANGUAGE plpgsql
    AS $function$
    BEGIN
      UPDATE "users"
      SET 
        "JDE" = COALESCE(p_JDE, "JDE"),
        fullname = COALESCE(p_fullname, fullname),
        "position" = COALESCE(p_position, "position"),
        "division" = COALESCE(p_division, "division"),
        "updated_at" = NOW()
      WHERE id = p_id;
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
    return knex.raw('DROP PROCEDURE IF EXISTS update_user;');
  };