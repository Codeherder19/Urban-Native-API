exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.specificType('my_garden', 'integer ARRAY').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};