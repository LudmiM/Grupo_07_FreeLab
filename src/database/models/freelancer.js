'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Freelancer extends Model {
    static associate(models) {
      Freelancer.belongsTo(models.Category, { foreignKey: 'idCategory' });
      Freelancer.belongsTo(models.User, { foreignKey: 'idUser' });
      Freelancer.hasMany(models.Favorite, { foreignKey: 'idFreelancer' })
      Freelancer.belongsToMany(models.Skill, {
        through: 'FreelancerSkill',
        foreignKey: 'idFreelancer',
        as: 'skills'
      });
      Freelancer.belongsToMany(models.Individual, {
        through: models.Application,
        foreignKey: 'idFreelancer'
      });
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