'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('publication_skills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      publication_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'projects'
          },
          key: 'id'
        }
      },
      skill_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'skills'
          },
          key: 'id'
        }
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
    await queryInterface.dropTable('publication_skills');
  }
};
