'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FreelancerSkills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idFreelancer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Freelancers",
          }
        }
      },
      idSkill: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Skilles",
          }
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('FreelancerSkills');
  }
};