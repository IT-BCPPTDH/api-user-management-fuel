/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.raw(`
    CREATE OR REPLACE FUNCTION get_users_paginated(
      IN page_num INTEGER,
      IN page_size INTEGER
    )
    RETURNS TABLE (
      id INTEGER,
      "JDE" VARCHAR(255),
      fullname VARCHAR(255),
      "position" VARCHAR(255),
      "division" VARCHAR(255),
      "created_at" TIMESTAMPTZ,
      "updated_at" TIMESTAMPTZ
    ) AS $$
    BEGIN
      RETURN QUERY
      SELECT
        uv.id,
        uv."JDE",
        uv.fullname,
        uv."position",
        uv."division",
        uv."created_at",
        uv."updated_at"
      FROM user_view uv
      ORDER BY uv.id
      LIMIT page_size
      OFFSET (page_num - 1) * page_size;
    END;
    $$ LANGUAGE PLPGSQL;
     
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.raw(`
      DROP FUNCTION IF EXISTS get_users_paginated(INTEGER, INTEGER);
    `);
};





