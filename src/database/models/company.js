'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //  Company.belongsTo(models.User, { foreignKey: 'idUser' });
    //  Company.hasMany(models.Project, { foreignKey: 'idCompany' });
      
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
    timestamps: false, 
  });
  return Company;
};