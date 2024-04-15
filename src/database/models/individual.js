'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Individual extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Individual.belongsTo(models.Project, { foreignKey: 'idProject' });
      Individual.belongsTo(models.Knowledge, { foreignKey: 'idKnowledge' });
      Individual.belongsTo(models.Specialty, { foreignKey: 'idSpecialty' });
      Individual.belongsToMany(models.Skill, { 
        through: 'IndividualSkill', 
        foreignKey: 'idIndividual',
        as: 'skills'
      });
      Individual.belongsToMany(models.Freelancer, {
        through: models.Application,
        foreignKey: 'idIndividual'
      });
    }
  }
  Individual.init({
    about: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    idProject: DataTypes.INTEGER,
    idSpecialty: DataTypes.INTEGER,
    idKnowledge: DataTypes.INTEGER,
    chosen: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Individual',
    timestamps: false, 
  });
  return Individual;
};