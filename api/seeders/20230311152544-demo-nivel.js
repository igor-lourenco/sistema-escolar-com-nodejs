'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Niveis', [
        {
        descr_nivel: 'Básico',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        descr_nivel: 'Intermediário',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        descr_nivel: 'Avançado',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Niveis', null, {});
  }
};
//comando pra popular esses dados no banco: npx sequelize-cli db:seed:all