'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({Post}) {
      this.hasMany(Post, {foreignKey: 'userId'})
    }
  }
  User.init({
    name: DataTypes.TEXT,
    email: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};