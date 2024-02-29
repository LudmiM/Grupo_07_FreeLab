'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class freelancers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  freelancers.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    country: DataTypes.STRING,
    phone_code: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    about: DataTypes.STRING,
    hour_value: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'freelancers',
  });
  return freelancers;
};