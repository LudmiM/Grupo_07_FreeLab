'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Freelancer extends Model {
    static associate(models) {
      // Define las asociaciones aquí si las necesitas
    }
  }
  Freelancer.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    country: DataTypes.STRING, // Agrega este campo si es necesario
    phoneCode: DataTypes.STRING, // Cambia el tipo de datos a STRING
    phone: DataTypes.STRING, // Cambia el tipo de datos a STRING
    about: DataTypes.TEXT,
    hourValue: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    idCategory: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Freelancer',
    tableName: 'freelancers', // Agrega el nombre de la tabla si es diferente
    timestamps: false, // Si no utilizas campos de timestamps
  });
  return Freelancer;
};