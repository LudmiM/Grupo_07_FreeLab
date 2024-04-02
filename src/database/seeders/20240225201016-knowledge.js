'use strict';

const {leerJSON} = require('../../data')
const knowledgeJSON = leerJSON('knowledge')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const knowledge = knowledgeJSON.map(k => ({ name: k }))
    await queryInterface.bulkInsert('Knowledge',
      knowledge, 
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Knowledge', null, {});
  }
};
