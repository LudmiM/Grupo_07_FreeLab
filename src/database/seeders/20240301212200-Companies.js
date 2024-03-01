'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Companies', [
      {
        companyName: "company",
        description: "Busco personal responsable",
        idUser: 2
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Companies', null, {});
  }
};
