'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      /*
      Skill.belongsToMany(models.Project, {
        through: 'ProjectSkill',
        foreignKey: 'idSkill',
        as: 'projects'
      });
      Skill.belongsToMany(models.Individual, {
        through: 'IndividualSkill',
        foreignKey: 'idSkill',
        as: 'individuals'
      });
      Skill.belongsToMany(models.Freelancer, {
        through: 'FreelancerSkill',
        foreignKey: 'idSkill',
        as: 'freelancers'
      });*/
    }
  }
  Specialty.init({
    name: DataTypes.STRING,
    idKnowledge: { 
      type : DataTypes.INTEGER,
      allowNull : true  
    },
  }, {
    sequelize,
    modelName: 'Specialty',
    timestamps: false, 
    tableName: 'Specialties',
  });
  return Specialty;
};