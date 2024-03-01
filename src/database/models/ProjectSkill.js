'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProjectSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //  ProjectSkill.belongsTo(models.Project, { foreignKey: 'idProject' });
    //  ProjectSkill.belongsTo(models.Skill, { foreignKey: 'idSkill' });
    }
  }
  ProjectSkill.init({
    idProject: DataTypes.INTEGER,
    idSkill: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProjectSkill',
  });
  return ProjectSkill;
};