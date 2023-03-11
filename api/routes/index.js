const bodyParser = require('body-parser');
const pessoas = require('../routes/PessoaRoute.js');
const turmas = require('../routes/TurmaRoute.js');
const niveis = require('../routes/NivelRoute.js');

module.exports = app => {
    app.use(bodyParser.json(),
    pessoas,
    turmas,
    niveis
    );
}