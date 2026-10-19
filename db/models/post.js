'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
  
    static associate({User}) {
      this.belongsTo(User, {foreignKey: 'userId'})
    }
  }
  Post.init({
    title: DataTypes.TEXT,
    content: DataTypes.TEXT,
    publishedAt: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};