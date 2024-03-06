'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //  Review.belongsTo(models.User, { as: 'Sender', foreignKey: 'idSender' });
    //  Review.belongsTo(models.User, { as: 'Receiver', foreignKey: 'idReceiver' });
    }
  }
  Review.init({
    idSender: DataTypes.INTEGER,
    idReceiver: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Review',
    tableName: 'Reviews'
  });
  return Review;
};