exports.up = function(knex) {
  return knex.schema.createTable('alunos', table => {
    table.increments();
    table.string('nome').notNullable();
    table.string('email').notNullable();
    table.string('senha').notNullable();

    table.unique('email');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('alunos');
};
