'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Freelancers', [
      {
        firstName: "Freelancer",
        lastName: "Freelancer",
        about: "Soy una persona responsable",
        hourValue: 15,
        idUser: 3,
        idSpecialty:2,
        idKnowledge:2
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Freelancers', null, {});

  }
};
