'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class publication_categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  publication_categories.init({
    publication_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    hour_value: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'publication_categories',
  });
  return publication_categories;
};