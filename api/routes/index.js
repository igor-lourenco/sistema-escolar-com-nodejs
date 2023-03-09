const bodyParser = require('body-parser');
const pessoas = require('../routes/PessoaRoute.js');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(pessoas);
}