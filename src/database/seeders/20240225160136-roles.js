'use strict';

const {leerJSON} = require('./../../data/')
const rolJSON = leerJSON('rol')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const roles = rolJSON.map(r => ({ name: r }))
    await queryInterface.bulkInsert('Roles',roles, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Roles', null, {});

  }
};
