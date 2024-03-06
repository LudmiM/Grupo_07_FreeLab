'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Freelancer extends Model {
    static associate(models) {
      Freelancer.belongsTo(models.Category, { foreignKey: 'idCategory' });
      Freelancer.belongsTo(models.User, { foreignKey: 'idUser' });
      /*Freelancer.hasMany(models.Favorite, { foreignKey: 'idFreelancer' })
      Freelancer.belongsToMany(models.Skill, {
        through: 'FreelancerSkill',
        foreignKey: 'idFreelancer',
        as: 'skills'
      });
      Freelancer.belongsToMany(models.Individual, {
        through: models.Application,
        foreignKey: 'idFreelancer'
      });*/
    }
  }
  Freelancer.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    country: DataTypes.STRING,
    country: DataTypes.STRING,
    mainImage: DataTypes.STRING,
    phoneCode: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    about: DataTypes.TEXT,
    hourValue: DataTypes.INTEGER,
    idUser: DataTypes.INTEGER,
    idCategory: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Freelancer',
    timestamps: false, 
  });
  return Freelancer;
};