/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
exports.up = function (knex) {
    return knex.schema.createTable('users_sessionTokens', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE');
      table.string('token').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    });
  };
  
  /**
   * @param {import("knex").Knex} knex
   * @returns {Promise<void>}
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('users_sessionTokens');
  };
  