'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.belongsTo(models.Status, { foreignKey: 'idStatus' });
      Project.belongsTo(models.Company, { foreignKey: 'idCompany' });
      //Project.belongsToMany(models.Category, { through: 'projects_category', foreignKey: 'idProject' });
      //Project.belongsToMany(models.Skill, { through: 'projects_skill', foreignKey: 'idProject' });
    }
  }
  Project.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    idStatus: DataTypes.INTEGER,
    idCompany: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};