'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    
    static associate({Book}) {
      this.hasMany(Book, {foreignKey: 'authorId', as:'books'})
    }
  }
  Author.init({
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    country: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};