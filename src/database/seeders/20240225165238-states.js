'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('States', [
      {
        name: 'abierto'
      },
      {
        name: 'pausado'
      },
      {
        name: 'finalizado'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('States', null, {});
  }
};
