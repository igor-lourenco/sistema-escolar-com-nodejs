const database = require("../models");

class Services {
    constructor(nomeDoModelo){
        this.nomeDoModelo = nomeDoModelo;
    }

    async findAll(){
        return database[this.nomeDoModelo].scope("todos").findAll();
    }
}

module.exports = Services;