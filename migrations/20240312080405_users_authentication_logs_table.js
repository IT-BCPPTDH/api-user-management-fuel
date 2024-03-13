/**
 * @param {import("knex").Knex} knex
 * @returns {Promise<void>}
 */
exports.up = function (knex) {
    return knex.schema.createTable('users_authenticationLogs', function (table) {
      table.increments('id').primary();
      table.integer('user_id').unsigned().references('users.id');
      table.string('status').notNullable();
      table.timestamp('log_timestamp').defaultTo(knex.fn.now()).notNullable();
    });
  };
  
  /**
   * @param {import("knex").Knex} knex
   * @returns {Promise<void>}
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('users_authenticationLogs');
  };
  