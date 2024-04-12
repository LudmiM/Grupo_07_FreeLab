'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Freelancers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      country: {
        type: Sequelize.STRING
      },
      mainImage: {
        type: Sequelize.STRING
      },
      phoneCode: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.INTEGER
      },
      about: {
        type: Sequelize.TEXT
      },
      hourValue: {
        type: Sequelize.INTEGER
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "Users",
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Freelancers');
  }
};