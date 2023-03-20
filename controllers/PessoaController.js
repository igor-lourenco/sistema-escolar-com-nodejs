//const database = require("../api/models");
//const Sequelize = require("sequelize");
const {PessoaService} = require("../api/services");
const pessoaService = new PessoaService();

class PessoaController {
  static async findAllActive(req, res) {
    try {
      const todasAsPessoasAtivas = await pessoaService.findAllActive();
      return res.status(200).json(todasAsPessoasAtivas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async findAll(req, res) {
    try {
      //const todasAsPessoas = await database.pessoas.scope("todos").findAll();
      const todasAsPessoas = await pessoaService.findAllPessoas();
      return res.status(200).json(todasAsPessoas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async findById(req, res) {
    const { id } = req.params;

    try {
      const p = await database.pessoas.scope("todos").findOne({
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
      return res.status(500).json({ message: erro.message });
    }
  }

  static async update(req, res) {
    const novasInfos = req.body;
    const { id } = req.params;

    try {
      await database.pessoas.update(novasInfos, {
        where: {
          id: Number(id),
        },
      });

      const pessoaAtualizada = await database.pessoas.findOne({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json(pessoaAtualizada);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async deleteById(req, res) {
    const { id } = req.params;

    try {
      await database.pessoas.destroy({
        where: {
          id: Number(id),
        },
      });

      return res
        .status(200)
        .json({ mensagem: `Id ${id} foi deletado com sucesso!` });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async restorePessoa(req, res) {
    const { id } = req.params;

    try {
      await database.pessoas.restore({
        where: {
          id: Number(id),
        },
      });

      return res
        .status(200)
        .json({ mensagem: `Id ${id} foi restaurado com sucesso!` });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async findAllMatriculasByPessoa(req, res) {
    const { estudanteId } = req.params;
    try {
      const todasAsPessoas = await database.Matriculas.findAll({
        where: {
          estudante_id: Number(estudanteId),
        },
      });
      return res.status(200).json(todasAsPessoas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async findByIdMatriculas(req, res) {
    const { estudanteId, matriculaId } = req.params;

    try {
      const matricula = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });

      if (matricula !== null) {
        return res.status(200).json(matricula);
      } else {
        return res
          .status(404)
          .json({ mensagem: `Id ${matriculaId} não encontrado!` });
      }
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async insertMatricula(req, res) {
    const { estudanteId } = req.params;
    const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) };

    try {
      const novaMatriculaCriada = await database.Matriculas.create(
        novaMatricula
      );
      return res.status(201).json(novaMatriculaCriada);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async updateMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;
    const novasInfos = req.body;

    try {
      await database.Matriculas.update(novasInfos, {
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });

      const matriculaAtualizada = await database.Matriculas.findOne({
        where: {
          id: Number(matriculaId),
        },
      });

      return res.status(200).json(matriculaAtualizada);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async deleteByIdMatricula(req, res) {
    const { estudanteId, matriculaId } = req.params;

    try {
      await database.Matriculas.destroy({
        where: {
          id: Number(matriculaId),
          estudante_id: Number(estudanteId),
        },
      });

      return res
        .status(200)
        .json({ mensagem: `Id ${matriculaId} foi deletado com sucesso!` });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async findPessoaComMatricula(req, res) {
    const { estudanteId } = req.params;

    try {
      const pessoa = await database.pessoas.findOne({
        where: {
          id: Number(estudanteId),
        },
      });

      const matriculas = await pessoa.getAulasMatriculadas(); // metodo criado no scope do modelo pessoas

      const pessoaComMatriculas = {
        id: pessoa.id,
        nome: pessoa.nome,
        ativo: pessoa.ativo,
        email: pessoa.email,
        role: pessoa.role,
        createdAt: pessoa.createdAt,
        updatedAt: pessoa.updatedAt,
        matriculas: matriculas,
      };

      return res.status(200).json(pessoaComMatriculas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async findMatriculaByTurma(req, res) {
    const { turmaId } = req.params;

    try {
      const todasAsMatriculas = await database.Matriculas.findAndCountAll({
        where: {
          turma_id: Number(turmaId),
          status: "Confirmado",
        },
        limit: 20,
        order: [["estudante_id", "DESC"]],
      });

      return res.status(200).json(todasAsMatriculas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async findMatriculaByTurmaLotadas(req, res) {
    const lotacaoTurma = 2;

    try {
      const turmasLotadas = await database.Matriculas.findAndCountAll({
        where: {
          status: "Confirmado",
        },
        attributes: ["turma_id"],
        group: ["turma_id"],
        having: Sequelize.literal(`count(turma_id) >= ${lotacaoTurma}`),
      });

      return res.status(200).json(turmasLotadas);
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }

  static async cancelPessoa(req, res) {
    const { estudanteId } = req.params;

    try {
      database.sequelize.transaction(async (transacao) => {
        await database.pessoas.update(
          { ativo: false },
          {
            where: {
              id: Number(estudanteId),
            },
          },
          { transaction: transacao }
        );

        await database.Matriculas.update(
          { status: "Cancelado" },
          {
            where: {
              estudante_id: Number(estudanteId),
            },
          },
          { transaction: transacao }
        );
      });

      return res
        .status(200)
        .json({
          message: `Matriculas referente ao estudante ${estudanteId} canceladas!`,
        });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = PessoaController;
