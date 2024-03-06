'use strict';

const {leerJSON} = require('./../../data/')
const skillJSON = leerJSON('skill')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const skill = skillJSON.map(s => ({ name: s.name, shape: s.shape }));
    await queryInterface.bulkInsert('Skilles',skill, {});

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Skilles', null, {});

  }
};
