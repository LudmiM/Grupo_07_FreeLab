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
      Individual.hasMany(models.IndividualSkill, { foreignKey: 'idIndividual' });
    }
  }
  Individual.init({
    specialty: DataTypes.STRING,
    about: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    idProject: DataTypes.INTEGER,
    chosen: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Individual',
  });
  return Individual;
};