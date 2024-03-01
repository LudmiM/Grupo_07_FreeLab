'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FreelancerSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //  FreelancerSkill.belongsTo(models.Freelancer, { foreignKey: 'idFreelancer' });
    //  FreelancerSkill.belongsTo(models.Skill, { foreignKey: 'idSkill' });
    }
  }
  FreelancerSkill.init({
    idFreelancer: DataTypes.INTEGER,
    idSkill: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'FreelancerSkill',
  });
  return FreelancerSkill;
};