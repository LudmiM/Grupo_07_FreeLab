'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('States', [
      {
        name: 'Abierto'
      },
      {
        name: 'Pausado'
      },
      {
        name: 'Finalizado'
      },
      {
        name: 'Borrador'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('States', null, {});
  }
};
