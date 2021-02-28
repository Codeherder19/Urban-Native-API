exports.up = function(knex) {
  return knex.schema.createTable('crops', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('description', 5000).notNullable();
    table.string('sun_reqs').notNullable();
    table.string('sowing_method', 5000).notNullable();
    table.integer('spread').notNullable();
    table.integer('row_spacing').notNullable();
    table.integer('height').notNullable();
    table.string('days_to_maturity', 5000).notNullable();
    table.specificType('photo_links', 'text ARRAY').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('crops');
};
