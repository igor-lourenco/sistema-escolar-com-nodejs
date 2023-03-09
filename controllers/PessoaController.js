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
        return res.status(404).json({ mensagem: `Id ${id} não encontrado!` });
      }
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async insert(req, res) {
    const novaPessoa = req.body;

    try {
      const novaPessoaCriada = await database.pessoas.create(novaPessoa);
      return res.status(201).json(novaPessoaCriada);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async update(req, res) {
    const novasInfos = req.body;
    const { id } = req.params;

    try {
      await database.pessoas.update(novasInfos, {
        where: {
          id: Number(id)
        }
      });

      const pessoaAtualizada = await database.pessoas.findOne({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).json(pessoaAtualizada);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async deleteById(req, res){
    const { id } = req.params;

    try {
      
      await database.pessoas.destroy({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).json({ mensagem : `Id ${id} foi deletado com sucesso!`});

    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = PessoaController;
