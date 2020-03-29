exports.up = function(knex) {
  return knex.schema.createTable('questoes', function(table) {
    table.increments();
    table.text('conteudo').notNullable();
    table.boolean('respondida').notNullable();
    table.integer('area_id').notNullable();
    table.integer('aluno_id').notNullable();

    table
      .foreign('area_id')
      .references('id')
      .inTable('areas');

    table
      .foreign('aluno_id')
      .references('id')
      .inTable('alunos');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('questoes');
};
