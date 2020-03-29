const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate');
const cors = require('cors');

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
