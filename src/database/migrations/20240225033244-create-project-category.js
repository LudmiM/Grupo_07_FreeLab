'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProjectCategories', {
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
      idCategory: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Categories",
          }
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProjectCategories');
  }
};