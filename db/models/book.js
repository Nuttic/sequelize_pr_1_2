'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
   
    static associate({Author}) {
     this.belongsTo(Author, {foreignKey: 'authorId', as: 'author'})
    }
  }
  Book.init({
    title: DataTypes.TEXT,
    year: DataTypes.INTEGER,
    genre: DataTypes.TEXT,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};