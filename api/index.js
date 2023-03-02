const express = require('express');
const routes = require('./routes');

const app = express();
const porta = 3000;

routes(app);

app.listen(porta, () => console.log(`Servidor está rodando na porta ${porta}`));

module.exports = app;