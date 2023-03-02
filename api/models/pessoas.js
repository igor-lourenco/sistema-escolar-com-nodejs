'use strict';
module.exports = (sequelize, DataTypes) => {
  const pessoas = sequelize.define('pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING
  }, {});
  pessoas.associate = function(models) {
    // associations can be defined here
  };
  return pessoas;
};