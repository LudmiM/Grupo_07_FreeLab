'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Rol, { foreignKey: 'idRole' });
      User.hasOne(models.Freelancer, { foreignKey: 'idUser' });
      User.hasOne(models.Company, { foreignKey: 'idUser' });
      User.hasMany(models.Review, { foreignKey: 'idSender', as: 'sentReviews' });
      User.hasMany(models.Review, { foreignKey: 'idReceiver', as: 'receivedReviews' });
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
