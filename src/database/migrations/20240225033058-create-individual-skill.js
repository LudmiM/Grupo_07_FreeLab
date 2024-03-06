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
        references: {
          model: {
            tableName: "Individuals",
          }
        }
      },
      idSkill: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Skilles",
          }
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('IndividualSkills');
  }
};
