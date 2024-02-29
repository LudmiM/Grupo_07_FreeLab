'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FreelancerSkills', {
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
    await queryInterface.dropTable('FreelancerSkills');
  }
};
