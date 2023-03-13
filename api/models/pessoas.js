"use strict";

/*
  Comando pra fazer a associação entre as tabelas:
  npx sequelize-cli db:migrate
*/
module.exports = (sequelize, DataTypes) => {
  const pessoas = sequelize.define(
    "pessoas",
    {
      nome: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      paranoid: true,
      defaultScope: {
        where: {
          ativo: true,
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
