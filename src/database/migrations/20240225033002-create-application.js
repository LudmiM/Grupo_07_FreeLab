'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Applications', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idFreelancer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Freelancers', // Nombre de la tabla Freelancers
          key: 'id' // Columna de referencia en la tabla Freelancers
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idIndividual: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Individuals', // Nombre de la tabla Individuals
          key: 'id' // Columna de referencia en la tabla Individuals
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      selected: {
        type: Sequelize.BOOLEAN,
        defaultValue: false // Valor predeterminado para la columna 'selected'
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
    await queryInterface.dropTable('Applications');
  }
};
