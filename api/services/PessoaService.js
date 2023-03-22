const Services = require("../services/Services.js");
const database = require("../models");

class PessoaService extends Services {
    constructor(){
        super("pessoas");
        this.matriculas = new Services('Matriculas');
    }

    async findAllActive(where = {}){
        return database[this.nomeDoModelo].findAll({where: {...where}});
    }

    async findAllPessoas(where = {}){
        return database[this.nomeDoModelo].scope("todos").findAll({where: {...where}});
    }

    async deletePessoaAndMatriculas(estudanteId){
        return database.sequelize.transaction(async transacao => {
            await super.update(estudanteId, {ativo: false}, { transaction: transacao});
            await this.matriculas.updates({estudante_Id: estudanteId}, {status: 'cancelado'}, {transaction: transacao});
        });
    }
    
}

module.exports = PessoaService;