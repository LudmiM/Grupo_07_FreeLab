'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING,
    checked: DataTypes.BOOLEAN,
    roleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true // Agregar timestamps
  });
  
  return User;
};
