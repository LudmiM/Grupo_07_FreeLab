'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Project.init(
    {
    title: { type : DataTypes.STRING,
    allownull : false },
    description: { type : DataTypes.TEXT,
      allowNull : true },
    createdAt: {type : DataTypes.DATE,
      allowNull : false  },
    updatedAt:{ type : DataTypes.DATE,
      allownull : false  },
    idStatus: { type : DataTypes.INTEGER,
      allowNull : true  },
    idCompany: { type : DataTypes.INTEGER,
      allowNull : true },
    price: { type : DataTypes.INTEGER,
      allowNull : true },
     }, {
    sequelize,
    modelName: 'Project',
  }
  );
  return Project;
};