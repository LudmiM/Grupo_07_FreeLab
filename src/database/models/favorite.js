'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //  Favorite.belongsTo(models.Freelancer, { foreignKey: 'idFreelancer' });
    //  Favorite.belongsTo(models.Project, { foreignKey: 'idProject' });
    }
  }
  Favorite.init({
    idFreelancer: DataTypes.INTEGER,
    idProject: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};