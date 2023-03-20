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

    async update(id, dados){

    }

    async deleteById(id){

    }
}

module.exports = Services;