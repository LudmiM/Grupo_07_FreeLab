'use strict';

const {leerJSON} = require('../../data')
const specialtyJSON = leerJSON('specialty')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const specialties = specialtyJSON.map(c => ({ name: c }))
    await queryInterface.bulkInsert('Specialties',
      specialties, 
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Specialties', null, {});
  }
};
