const database = require("../api/models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class TurmaController {
  static async findAll(req, res) {
    try {
      const todasAsTurmas = await database.Turmas.findAll();
      return res.status(200).json(todasAsTurmas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async findAllFilterByData(req, res) {
    const {data_inicial, data_final} = req.query;
    const where = {};

    data_inicial || data_final ? where.data_inicio = {} : null //verific se esses parametros vinheram na requisição
    data_inicial ? where.data_inicio[Op.gte] = data_inicial : null; // seta o valor da data_inicial dentro do objeto data_inicio
    data_final ? where.data_inicio[Op.lte] = data_final : null;  // seta o valor da data_final dentro do objeto data_inicio

    try {
      const todasAsTurmas = await database.Turmas.findAll({where});
      console.log(todasAsTurmas);
      return res.status(200).json(todasAsTurmas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async findById(req, res) {
    const { id } = req.params;

    try {
      const p = await database.Turmas.findOne({
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
    const novaTurma = req.body;

    try {
      const novaTurmaCriada = await database.Turmas.create(novaTurma);
      return res.status(201).json(novaTurmaCriada);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async update(req, res) {
    const novasInfos = req.body;
    const { id } = req.params;

    try {
      await database.Turmas.update(novasInfos, {
        where: {
          id: Number(id)
        }
      });

      const TurmaAtualizada = await database.Turmas.findOne({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).json(TurmaAtualizada);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async deleteById(req, res){
    const { id } = req.params;

    try {
      
      await database.Turmas.destroy({
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

module.exports = TurmaController;
