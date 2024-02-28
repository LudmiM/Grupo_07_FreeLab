'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
  });
  return User;
};