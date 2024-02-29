'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  companies.init({
    company_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.TEXT,
    main_image: DataTypes.TEXT,
    website: DataTypes.TEXT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'companies',
  });
  return companies;
};