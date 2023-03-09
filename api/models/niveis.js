'use strict';
/*
  Comando pra criar a tabela com os campos:
  npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string
*/

module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define('Niveis', {
    descr_nivel: DataTypes.STRING
  }, {});
  Niveis.associate = function(models) {
    Niveis.hasMany(models.Turmas, {
      foreignKey: 'nivel_id'
    });
  };
  return Niveis;
};