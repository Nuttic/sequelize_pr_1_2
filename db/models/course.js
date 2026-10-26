'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
   
    static associate({Student, Enrollment}) {
      this.belongsToMany(Student, {
      through: Enrollment,
      foreignKey: 'courseId',
      otherKey: 'studentId',
      as: 'students'
  });
    }
  }
  Course.init({
    title: DataTypes.STRING,
    credits: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};