'use strict';
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
        allowNull: false,
        references: {
          model: 'Projects', // Nombre de la tabla Projects
          key: 'id' // Columna de referencia en la tabla Projects
        },
        onUpdate: 'CASCADE', // Actualizar en cascada si el proyecto se actualiza
        onDelete: 'CASCADE' // Eliminar en cascada si el proyecto se elimina
      },
      idCategory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories', // Nombre de la tabla Categories
          key: 'id' // Columna de referencia en la tabla Categories
        },
        onUpdate: 'CASCADE', // Actualizar en cascada si la categoría se actualiza
        onDelete: 'CASCADE' // Eliminar en cascada si la categoría se elimina
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
    await queryInterface.dropTable('ProjectCategories');
  }
};
