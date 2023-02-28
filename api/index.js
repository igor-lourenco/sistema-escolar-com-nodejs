const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(bodyParser.json());

const porta = 3000;

app.get("/teste", (req, res) => {
    res.status(200).send({mensagem: "Boas vindas a API"})
});

app.listen(porta, () => console.log(`Servidor está rodando na porta ${porta}`));

module.exports = app;