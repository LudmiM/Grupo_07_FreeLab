'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Skill.belongsToMany(models.Project, {
        through: 'ProjectSkill',
        foreignKey: 'idSkill',
        as: 'projects'
      });
      Skill.belongsToMany(models.Individual, {
        through: models.IndividualSkill,
        foreignKey: 'idSkill'
      });
      Skill.belongsToMany(models.Freelancer, {
        through: 'FreelancerSkill',
        foreignKey: 'idSkill',
        as: 'freelancers'
      });
    }
  }
  Skill.init({
    name: DataTypes.STRING,
    shape: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Skill',
    timestamps: false, 
    tableName: 'skilles',
  });
  return Skill;
};