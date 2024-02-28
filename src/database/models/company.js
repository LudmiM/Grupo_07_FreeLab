'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      // define association here
    }
  }
  Company.init({
    companyName: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.TEXT,
    mainImage: DataTypes.TEXT,
    website: DataTypes.TEXT,
    idUser: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};
