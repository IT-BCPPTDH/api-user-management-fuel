exports.up = function (knex) {
    return knex.schema.alterTable('users_roles', function (table) {
        table.boolean('is_operator_fuel').defaultTo(false);
    });
};

exports.down = function (knex) {
    return knex.schema.alterTable('users_roles', function (table) {
        table.dropColumn('is_operator_fuel');
    });
};
