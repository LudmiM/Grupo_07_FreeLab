'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Individuals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      specialty: {
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.TEXT
      },
      price: {
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
      chosen: {
        type: Sequelize.BOOLEAN
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

    // Tabla de unión para la relación de muchos a muchos con la tabla Skills
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
    await queryInterface.dropTable('Individuals');
  }
};
