'use strict';

/*
  Comando pra criar esse arquivo:
  npx sequelize-cli seed:generate --name demo-matriculas
*/

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Matriculas', [
        {
        status: 'Confirmado',
        estudante_id: 1,
        turma_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        status: 'Confirmado',
        estudante_id: 2,
        turma_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        status: 'Confirmado',
        estudante_id: 3,
        turma_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        status: 'Confirmado',
        estudante_id: 4,
        turma_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        status: 'Cancelado',
        estudante_id: 1,
        turma_id: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        status: 'Cancelado',
        estudante_id: 2,
        turma_id: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Matriculas', null, {});
  }
};
//comando pra popular esses dados no banco: npx sequelize-cli db:seed:all