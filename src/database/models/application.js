'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Application.belongsTo(models.Freelancer, { foreignKey: 'idFreelancer' });
      Application.belongsTo(models.Individual, { foreignKey: 'idIndividual' });
    }
  }
  Application.init({
    idFreelancer: DataTypes.INTEGER,
    idIndividual: DataTypes.INTEGER,
    selected: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Application',
    timestamps: false, 
  });
  return Application;
};