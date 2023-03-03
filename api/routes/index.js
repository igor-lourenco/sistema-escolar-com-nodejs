const bodyParser = require('body-parser');
const pessoas = require('../routes/pessoaRoute.js');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(pessoas);
}