'use strict';
require('dotenv').config();

const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        email: "admin@gmail.com",
        password: bcryptjs.hashSync(process.env.PASSWORD_ADMIN, 10),
        idRole : 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "company@gmail.com",
        password: bcryptjs.hashSync(process.env.PASSWORD_ADMIN, 10),
        idRole : 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "freelancer@gmail.com",
        password: bcryptjs.hashSync(process.env.PASSWORD_ADMIN, 10),
        idRole : 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
