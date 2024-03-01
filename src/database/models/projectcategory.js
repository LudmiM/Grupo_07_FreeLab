'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //  ProjectCategory.belongsTo(models.Project, { foreignKey: 'idProject' });
    //  ProjectCategory.belongsTo(models.Category, { foreignKey: 'idCategory' });
    }
  }
  ProjectCategory.init({
    idProject: DataTypes.INTEGER,
    idCategory: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProjectCategory',
  });
  return ProjectCategory;
};