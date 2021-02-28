exports.up = function(knex) {
  return knex.schema.createTable('crops', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.string('description').notNullable();
    table.string('sunReqs').notNullable();
    table.string('sowingMethod').notNullable();
    table.integer('spread').notNullable();
    table.integer('rowSpacing').notNullable();
    table.integer('height').notNullable();
    table.string('daysToMaturity').notNullable();
    table.specificType('photoLinks', 'integer ARRAY').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('crops');
};
