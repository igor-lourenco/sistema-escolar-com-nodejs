'use strict';

/**
  Comando pra criar a tabela Turmas:
  npx sequelize-cli model:create --name Turmas --attributes data_inicio:dateonly
 */

module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    data_inicio: DataTypes.DATEONLY
  }, {});
  Turmas.associate = function(models) {
    Turmas.hasMany(models.Matriculas, {
      foreignKey: 'turma_id'
    });
    Turmas.belongsTo(models.pessoas);
    Turmas.belongsTo(models.Niveis);

  };
  return Turmas;
};