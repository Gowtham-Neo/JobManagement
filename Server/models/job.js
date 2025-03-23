'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init({
    jobTitle: DataTypes.STRING,
    companyName: DataTypes.STRING,
    location: DataTypes.STRING,
    jobType: DataTypes.STRING,
    salaryMin: DataTypes.INTEGER,
    salaryMax: DataTypes.INTEGER,
    deadline: DataTypes.DATE,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};