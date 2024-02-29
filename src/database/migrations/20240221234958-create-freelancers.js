'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('freelancers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      phone_code: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.INTEGER
      },
      about: {
        type: Sequelize.STRING
      },
      hour_value: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users'
          },
         //key: 'id'
        },
      },
      category_id: {
        type: Sequelize.INTEGER, 
        references: {
          model: {
            tableName: 'categories'
          },
          //key: 'id'
        },
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
    await queryInterface.dropTable('freelancers');
  }
};
