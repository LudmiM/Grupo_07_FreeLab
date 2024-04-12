'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Individuals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      about: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      idProject: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Projects",
          }
        }
      },
      idSpecialty: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Specialties",
          }
        }
      },
      idKnowledge: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Knowledges",
          }
        }
      },
      chosen: {
        type: Sequelize.BOOLEAN
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Individuals');
  }
};