'use strict';

/**
  Comando pra criar a tabela Turmas:
  npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly

  Comando pra fazer a associação entre as tabelas:
  npx sequelize-cli db:migrate
 */

module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    data_inicio: DataTypes.DATEONLY
  }, {paranoid: true});
  Turmas.associate = function(models) {
    Turmas.hasMany(models.Matriculas, {
      foreignKey: 'turma_id'
    });
    Turmas.belongsTo(models.pessoas, {
      foreignKey: 'docente_id'
    });
    Turmas.belongsTo(models.Niveis, {
      foreignKey: 'nivel_id'
    });

  };
  return Turmas;
};