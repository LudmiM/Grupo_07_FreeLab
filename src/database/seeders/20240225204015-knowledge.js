'use strict';

const {leerJSON} = require('../../data')
const knowledgeJSON = leerJSON('knowledge')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const knowledges = knowledgeJSON.map(k => ({ name: k }))
    await queryInterface.bulkInsert('Knowledges',
      knowledges, 
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Knowledges', null, {});
  }
};
