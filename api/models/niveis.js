'use strict';
/*
  Comando pra criar a tabela com os campos:
  npx sequelize-cli model:create --name Niveis --attributes descr_nivel:string

  Comando pra fazer a associação entre as tabelas:
  npx sequelize-cli db:migrate
*/

module.exports = (sequelize, DataTypes) => {
  const Niveis = sequelize.define('Niveis', {
    descr_nivel: DataTypes.STRING
  }, {paranoid: true});
  Niveis.associate = function(models) {
    Niveis.hasMany(models.Turmas, {
      foreignKey: 'nivel_id'
    });
  };
  return Niveis;
};