const jwt = require('jsonwebtoken');
const connection = require('../../database/connection');
const { validateHash } = require('../../utils/HashUtils');
const authConfig = require('../../config/auth');
module.exports = {
  async store(request, response) {
    const { email, senha } = request.body;

    const aluno = await connection('alunos')
      .where('email', email)
      .first();

    if (!aluno) {
      return response.status(401).json({ error: 'E-mail não cadastrado.' });
    }

    if (!(await validateHash(senha, aluno.senha))) {
      return response.status(401).json({ error: 'Senha informada incorreta.' });
    }

    const { id, nome } = aluno;

    return response.json({
      aluno: {
        id,
        nome,
        email
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn
      })
    });
  }
};
