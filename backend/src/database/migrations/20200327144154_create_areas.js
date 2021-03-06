exports.up = function(knex) {
  return knex.schema.createTable('areas', function(table) {
    table.increments();
    table.string('nome').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('areas');
};
