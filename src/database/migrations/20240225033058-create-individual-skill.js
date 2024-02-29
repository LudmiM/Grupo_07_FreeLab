'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IndividualSkills', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idIndividual: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Individuals', // Nombre de la tabla Individuals
          key: 'id' // Columna de referencia en la tabla Individuals
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idSkill: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Skills', // Nombre de la tabla Skills
          key: 'id' // Columna de referencia en la tabla Skills
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('IndividualSkills');
  }
};
