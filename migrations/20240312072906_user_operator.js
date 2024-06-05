/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.raw(`
    CREATE OR REPLACE VIEW user_operator AS
    SELECT
      id,
      "JDE",
      fullname,
      "position",
      "division",
      "created_at",
      "updated_at"
    FROM "users"
    WHERE "position" LIKE '%Operator%';
    `);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.raw('DROP VIEW IF EXISTS user_operator;');
};