'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Knowledge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Knowledge.hasMany(models.Individual, { foreignKey: 'idKnowledge' });
    }
  }
  Knowledge.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Knowledge',
    timestamps: false,
  });
  return Knowledge;
};