"use strict";

/*
  Comando pra fazer a associação entre as tabelas:
  npx sequelize-cli db:migrate
*/
module.exports = (sequelize, DataTypes) => {
  const pessoas = sequelize.define(
    "pessoas",
    {
      nome: {
        type: DataTypes.STRING,
        validate: {
          valida: (dado) =>{
            if(dado.length < 3) throw new Error('O campo nome deve ter mais de 3 caracteres')
          }
        }
      },
      ativo: DataTypes.BOOLEAN,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "E-mail inválido!",
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      paranoid: true,
      defaultScope: {
        where: {
          ativo: true,
        },
      },
      scopes: {
        todos: {
          where: {},
        },
      },
    }
  );
  pessoas.associate = function (models) {
    pessoas.hasMany(models.Turmas, {
      foreignKey: "docente_id",
    });
    pessoas.hasMany(models.Matriculas, {
      foreignKey: "estudante_id",
    });
  };
  return pessoas;
};
