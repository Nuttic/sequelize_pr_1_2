'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    
    static associate({Course, Enrollment}) {
     this.belongsToMany(Course, {
      through: Enrollment,
      foreignKey: 'studentId',
      otherKey: 'courseId',
      as: 'courses'
  });
    }
  }
  Student.init({
    name: DataTypes.STRING,
    group: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};