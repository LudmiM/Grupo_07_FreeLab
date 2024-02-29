'use strict';
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
      description: {
        type: Sequelize.TEXT
      },
      idStatus: {
        type: Sequelize.INTEGER,
        allowNull: true, // Permitir valores nulos
        references: {
          model: 'Statuses', // Nombre de la tabla Statuses
          key: 'id' // Columna de referencia en la tabla Statuses
        },
        onUpdate: 'CASCADE', // Actualizar en cascada si el estado se actualiza
        onDelete: 'SET NULL' // Establecer en nulo si el estado se elimina
      },
      idCompany: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Companies', // Nombre de la tabla Companies
          key: 'id' // Columna de referencia en la tabla Companies
        },
        onUpdate: 'CASCADE', // Actualizar en cascada si la compañía se actualiza
        onDelete: 'CASCADE' // Eliminar en cascada si la compañía se elimina
      },
      price: {
        type: Sequelize.INTEGER
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
