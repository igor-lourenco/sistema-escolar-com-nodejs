const database = require("../api/models");

class PessoaController {
  static async findAllActive(req, res) {
    try {
      const todasAsPessoasAtivas = await database.pessoas.findAll();
      return res.status(200).json(todasAsPessoasAtivas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async findAll(req, res) {
    try {
      const todasAsPessoas = await database.pessoas.scope('todos').findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async findById(req, res) {
    const { id } = req.params;

    try {
      const p = await database.pessoas.scope('todos').findOne({
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

  static async restorePessoa(req, res){
    const { id } = req.params;

    try {
      
      await database.pessoas.restore({
        where: {
          id: Number(id)
        }
      });

      return res.status(200).json({ mensagem : `Id ${id} foi restaurado com sucesso!`});

    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }


  static async findAllMatriculasByPessoa(req, res) {
    const {estudanteId} = req.params;
    try {
      const todasAsPessoas = await database.Matriculas.findAll({
        where: {
          estudante_id: Number(estudanteId)
        }
      });
      return res.status(200).json(todasAsPessoas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }


  static async findByIdMatriculas(req, res) {
    const {estudanteId, matriculaId} = req.params;

    try {
      const matricula = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      });

      if (matricula !== null) {
        return res.status(200).json(matricula);
      } else {
        return res.status(404).json({ mensagem: `Id ${matriculaId} não encontrado!` });
      }
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async insertMatricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId)};

    try {
      const novaMatriculaCriada = await database.Matriculas.create(novaMatricula);
      return res.status(201).json(novaMatriculaCriada);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async updateMatricula(req, res) {
    const {estudanteId, matriculaId} = req.params;
    const novasInfos = req.body;

    try {
      await database.Matriculas.update(novasInfos, {
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      });

      const matriculaAtualizada = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
         }
      });

      return res.status(200).json(matriculaAtualizada);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async deleteByIdMatricula(req, res){
    const {estudanteId, matriculaId} = req.params;

    try {
      
      await database.Matriculas.destroy({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId)
        }
      });

      return res.status(200).json({ mensagem : `Id ${matriculaId} foi deletado com sucesso!`});

    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = PessoaController;
