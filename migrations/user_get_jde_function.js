/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.raw(`
      CREATE OR REPLACE FUNCTION get_user_jde(inputOperator VARCHAR[])
      RETURNS TABLE(
        "JDE" VARCHAR,
        fullname VARCHAR
      ) AS $$
      DECLARE
          query TEXT;
      BEGIN
          -- Construct the dynamic query
          query := '
              SELECT 
              "JDE", 
              fullname
              FROM public.users
              WHERE fullname LIKE ANY (ARRAY[$1])';
  
          -- Execute the dynamic query
          RETURN QUERY EXECUTE query USING inputOperator;
      END;
  $$ LANGUAGE plpgsql;
    `)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.raw('DROP VIEW IF EXISTS get_user_jde;');
};
