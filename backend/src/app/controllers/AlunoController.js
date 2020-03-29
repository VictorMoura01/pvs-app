const connection = require('../../database/connection');
const { generateHash } = require('../../utils/HashUtils');
module.exports = {
  async store(request, response) {
    const { nome, email, senha, id_turma } = request.body;

    const alunoExiste = await connection('alunos')
      .where('email', email)
      .first();

    if (alunoExiste) {
      return response.status(400).json({ error: 'E-mail já cadastrado.' });
    }

    const senha_hash = await generateHash(senha);

    const [id] = await connection('alunos').insert({
      nome,
      email,
      senha: senha_hash
    });

    return response.json({ id });
  },
  async update(request, response) {
    console.log(request.alunoId);
    return response.json();
  }
};
