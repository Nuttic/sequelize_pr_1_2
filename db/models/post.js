'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
  
    static associate({User}) {
      this.belongsTo(User, {foreignKey: 'userId', as:'users' })
    }
  }
  Post.init({
    title: DataTypes.TEXT,
    content: DataTypes.TEXT,
    publishedAt: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    status: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};