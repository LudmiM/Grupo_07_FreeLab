'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idSender: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Nombre de la tabla Users
          key: 'id' // Columna de referencia en la tabla Users
        },
        onUpdate: 'CASCADE', // Actualizar en cascada si el usuario remitente se actualiza
        onDelete: 'CASCADE' // Eliminar en cascada si el usuario remitente se elimina
      },
      idReceiver: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Nombre de la tabla Users
          key: 'id' // Columna de referencia en la tabla Users
        },
        onUpdate: 'CASCADE', // Actualizar en cascada si el usuario receptor se actualiza
        onDelete: 'CASCADE' // Eliminar en cascada si el usuario receptor se elimina
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: false
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
    await queryInterface.dropTable('Reviews');
  }
};
