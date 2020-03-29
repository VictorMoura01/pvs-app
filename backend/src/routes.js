const express = require('express');

const routes = express.Router();

const authMiddleware = require('../src/app/middlewares/auth');
const Validation = require('../src/app/middlewares/validation');

const AreaController = require('./app/controllers/AreaController');
const QuestaoController = require('./app/controllers/QuestaoController');
const AlunoController = require('./app/controllers/AlunoController');
const SessionController = require('./app/controllers/SessionController');

/**
 * Rotas sem autenticação de acesso
 */
routes.post('/session', SessionController.store);
routes.post('/alunos', Validation.cadastroAluno(), AlunoController.store);
/**
 * Rotas com autenticação de acesso via JWT
 */
routes.use(authMiddleware);

// Áreas de atuação e/ou disciplinas do curso
routes.get('/areas/disciplinas', AreaController.index);

// Aplicativo de Perguntas e Respostas
routes.get('/questoes', QuestaoController.index);
routes.post(
  '/questoes',
  Validation.cadastroQuestao(),
  QuestaoController.create
);

module.exports = routes;
