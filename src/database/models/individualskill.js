'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IndividualSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IndividualSkill.init({
    idIndividual: DataTypes.INTEGER,
    idSkill: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'IndividualSkill',
  });
  return IndividualSkill;
};