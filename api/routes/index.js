const bodyParser = require('body-parser');
const pessoas = require('../routes/PessoaRoute.js');
const turmas = require('../routes/TurmaRoute.js');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(pessoas);
    app.use(turmas);
}