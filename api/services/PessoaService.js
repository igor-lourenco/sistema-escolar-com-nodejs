const Services = require("../services/Services.js");
const database = require("../models");

class PessoaService extends Services {
    constructor(){
        super("pessoas");
    }

    async findAllActive(where = {}){
        return database[this.nomeDoModelo].findAll({where: {...where}});
    }

    async findAllPessoas(where = {}){
        return database[this.nomeDoModelo].scope("todos").findAll({where: {...where}});
    }
    
}

module.exports = PessoaService;