const database = require("../models");

class Services {
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo;
    }

    async findAll(){
        return database[this.nomeDoModelo].findAll();
    }

    async findById(id){

    }

    async insert(dados){

    }

    async update(id, dados, transacao = {}){
        return database[this.nomeDoModelo].update(dados, { where: { id: id }}, transacao);
    }

    async updates(where, dados, transacao = {}){
        return database[this.nomeDoModelo].update(dados, { where: { ...where }}, transacao);
    }

    async deleteById(id){

    }
}

module.exports = Services;