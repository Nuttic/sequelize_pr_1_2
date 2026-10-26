'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => 
{ 
  
  class Enrollment extends Model {
   
    static associate({Student, Course}) {
      this.belongsTo(Student, { foreignKey: 'studentId' });
      this.belongsTo(Course, { foreignKey: 'courseId' });
      }
    }
  Enrollment.init({
    studentId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
    enrolledAt: DataTypes.DATE,
    grade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Enrollment',
  });
  return Enrollment;
};