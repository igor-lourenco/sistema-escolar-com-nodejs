'use strict';
/*
  Comando pra criar a tabela Matriculas:
  npx sequelize-cli model:create --name Matriculas --attributes status:string

  Comando pra fazer a associação entre as tabelas:
  npx sequelize-cli db:migrate
*/

module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    status: DataTypes.STRING
  }, {paranoid: true});
  Matriculas.associate = function(models) {
    Matriculas.belongsTo(models.pessoas, {
      foreignKey: 'estudante_id'
    });
    Matriculas.belongsTo(models.Turmas, {
      foreignKey: 'turma_id'
    });
  };
  return Matriculas;
};