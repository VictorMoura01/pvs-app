const { celebrate, Joi, errors, Segments } = require('celebrate');
module.exports = {
  session() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        email: Joi.string()
          .email()
          .required(),
        senha: Joi.string().required()
      })
    });
  },
  cadastroAluno() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string()
          .email()
          .required(),
        senha: Joi.string()
          .min(6)
          .required()
      })
    });
  },
  cadastroQuestao() {
    return celebrate({
      [Segments.BODY]: Joi.object().keys({
        conteudo: Joi.string().required(),
        area_id: Joi.number()
          .integer()
          .required()
      })
    });
  }
};
