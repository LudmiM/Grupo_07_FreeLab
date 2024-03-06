'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
<<<<<<< HEAD:src/database/migrations/20240225032656-create-project.js
      description: {
        type: Sequelize.TEXT
      },
      idStatus: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "States",
          }
        }
      },
      idCompany: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Companies",
          }
        }
=======
      image: {
        type: Sequelize.STRING
>>>>>>> af85b5d75ef7401a4f62e4d98bd955096c069bea:src/database/migrations/20240221235004-create-skills.js
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};