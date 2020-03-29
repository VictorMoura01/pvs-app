const connection = require('../../database/connection');
module.exports = {
  async index(request, response) {
    const questoes = await connection('questoes')
      .where('aluno_id', request.alunoId)
      .select('*');

    return response.json(questoes);
  },

  async create(request, response) {
    const { conteudo, area_id } = request.body;
    const respondida = false;

    const [id] = await connection('questoes').insert({
      conteudo,
      area_id,
      respondida,
      aluno_id: request.alunoId
    });
    return response.json({ id });
  }
};
