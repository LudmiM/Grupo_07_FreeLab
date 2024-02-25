'use strict';

const rolJSON = require('./../../data/rol.json')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'freelancer'
      },
      {
        name: 'companie'
      },
      {
        name: 'administrador'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Roles', null, {});

  }
};
