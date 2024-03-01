'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectSkills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idProject: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Projects",
          }
        }
      },
      idSkill: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Skilles",
          }
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProjectSkills');
  }
};