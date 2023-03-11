const database = require("../api/models");

class NivelController {
  static async findAll(req, res) {
    try {
      const todosNiveis = await database.Niveis.findAll();
      return res.status(200).json(todosNiveis);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async findById(req, res) {
    const { id } = req.params;

    try {
      const p = await database.Niveis.findOne({
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
    const novoNivel = req.body;

    try {
      const novoNivelCriado = await database.Niveis.create(novoNivel);
      return res.status(201).json(novoNivelCriado);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async update(req, res) {
    const novasInfos = req.body;
    const { id } = req.params;

    try {
      await database.Niveis.update(novasInfos, {
        where: {
          id: Number(id)
        }
      });

      const nivelAtualizado = await database.Niveis.findOne({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).json(nivelAtualizado);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async deleteById(req, res){
    const { id } = req.params;

    try {
      
      await database.Niveis.destroy({
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

module.exports = NivelController;
