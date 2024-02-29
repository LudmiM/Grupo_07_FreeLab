'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      location: {
        type: Sequelize.TEXT
      },
      mainImage: {
        type: Sequelize.TEXT
      },
      website: {
        type: Sequelize.TEXT
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users', // Nombre de la tabla de usuarios
          key: 'id' // Nombre de la columna de usuario referenciada
        },
        onUpdate: 'CASCADE', // Actualizar en cascada si el usuario se actualiza
        onDelete: 'CASCADE' // Eliminar en cascada si el usuario se elimina
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
    await queryInterface.dropTable('Companies');
  }
};
