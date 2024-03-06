'use strict';

const {leerJSON} = require('./../../data/')
const categoryJSON = leerJSON('category')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const categories = categoryJSON.map(c => ({ name: c }))
    await queryInterface.bulkInsert('Categories',
      categories, 
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
