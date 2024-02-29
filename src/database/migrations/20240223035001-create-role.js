'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });

    // Agregar la clave foránea idRole en la tabla Users
    await queryInterface.addColumn('Users', 'idRole', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles', // Nombre de la tabla Roles
        key: 'id' // Columna de referencia en la tabla Roles
      },
      onUpdate: 'CASCADE', // Actualizar en cascada si el rol se actualiza
      onDelete: 'CASCADE' // Eliminar en cascada si el rol se elimina
    });
  },
  async down(queryInterface, Sequelize) {
    // Eliminar la clave foránea idRole de la tabla Users
    await queryInterface.removeColumn('Users', 'idRole');
    await queryInterface.dropTable('Roles');
  }
};
