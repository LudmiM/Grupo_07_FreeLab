'use strict';

const {leerJSON} = require('../../data')
const specialtiesJSON = leerJSON('specialties')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let specialties = [];
    let i =1
    specialtiesJSON.forEach((e) =>{
        for (const name of e[`${i}`]) {
            const idCategory= i;
            specialties.push({name,idCategory});
        }
        i++
    })
    await queryInterface.bulkInsert('Specialties',
      specialties, 
    {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Specialties', null, {});
  }
};
