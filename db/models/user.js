'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Post}) {
      this.hasMany(Post, {foreignKey: 'userId', as: 'posts'})
    }
  }
  User.init({
    name: DataTypes.TEXT,
    email: DataTypes.TEXT,
    isActive:DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};