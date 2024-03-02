'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {/*
      Category.hasMany(models.Freelancer, { foreignKey: 'idCategory' });
      Category.belongsToMany(models.Project, { through: 'ProjectsCategory', foreignKey: 'idCategory', as: 'projects' });
      Category.belongsToMany(models.Freelancer, { through: 'FreelancersCategory', foreignKey: 'idCategory' });
  */}
  }
  Category.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
    timestamps: false, 
  });
  return Category;
};