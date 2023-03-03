const database = require("../api/models");

class PessoaController {
  static async findAll(req, res) {
    try {
      const todasAsPessoas = await database.pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async findById(req, res) {
    const { id } = req.params;

    try {
      const p = await database.pessoas.findOne({
        where: {
          id: Number(id),
        },
      });

      if (p !== null) {
          return res.status(200).json(p);
        } else {
          return res.status(404).json({mensagem : `Id ${id} não encontrado!`});
      }
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = PessoaController;
