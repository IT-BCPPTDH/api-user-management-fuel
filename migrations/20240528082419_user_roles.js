/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users_roles', function (table) {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE');
        table.boolean('breakdown').defaultTo(false).notNullable();
        table.boolean('production').defaultTo(false).notNullable();
        table.boolean('timeentry').defaultTo(false).notNullable();
        table.boolean('coalhauling').defaultTo(false).notNullable();
        table.boolean('weather').defaultTo(false).notNullable();
        table.boolean('admin').defaultTo(false).notNullable();
        table.boolean('fuelman').defaultTo(false).notNullable();
        table.boolean('admin_fuel').defaultTo(false).notNullable();
        table.boolean('spv_fuel').defaultTo(false).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users_roles');
};
