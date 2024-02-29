'use strict';
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
          model: 'Users', // Nombre de la tabla Users
          key: 'id' // Nombre de la columna de usuario referenciada
        },
        onUpdate: 'CASCADE', // Actualizar en cascada si el usuario se actualiza
        onDelete: 'CASCADE' // Eliminar en cascada si el usuario se elimina
      },
      idCategory: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories', // Nombre de la tabla Categories
          key: 'id' // Nombre de la columna de categoría referenciada
        },
        onUpdate: 'CASCADE', // Actualizar en cascada si la categoría se actualiza
        onDelete: 'SET NULL' // Establecer en nulo si la categoría se elimina
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
    await queryInterface.dropTable('Freelancers');
  }
};
