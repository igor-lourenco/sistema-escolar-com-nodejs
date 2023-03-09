'use strict';
/*
  Comando pra criar a tabela Matriculas:
  npx sequelize-cli model:create --name Matriculas --attributes status:string
*/

module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    status: DataTypes.STRING
  }, {});
  Matriculas.associate = function(models) {
    // associations can be defined here
  };
  return Matriculas;
};