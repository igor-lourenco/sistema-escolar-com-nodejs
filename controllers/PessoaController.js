const database = require('../api/models');


class PessoaController {
    static async findAll(req, res){
        try{

            const todasAsPessoas = await database.pessoas.findAll();
            return res.status(200).json(todasAsPessoas);
        }catch(erro){
            return res.status(500).json(erro.message);
        }
    }
}

module.exports = PessoaController;