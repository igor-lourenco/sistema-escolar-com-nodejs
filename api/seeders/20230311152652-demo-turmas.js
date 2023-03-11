'use strict';

/*
  Comando pra criar esse arquivo:
  npx sequelize-cli seed:generate --name demo-turmas
*/

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Turmas', [
        {
        data_inicio: '2020-02-01',
        nivel_id: 1,
        docente_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },    {
        data_inicio: '2020-02-01',
        nivel_id: 2,
        docente_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },    {
        data_inicio: '2020-02-01',
        nivel_id: 3,
        docente_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },    {
        data_inicio: '2020-02-01',
        nivel_id: 3,
        docente_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Turmas', null, {});
  }
};
//comando pra popular esses dados no banco: npx sequelize-cli db:seed:all