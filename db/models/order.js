'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
   
    static associate({Item}) {
     this.hasMany(Item, {
        foreignKey: 'orderId',
        as: 'items'
      })
    }
  }
  Order.init({
    number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    status: {
      type: DataTypes.ENUM('new', 'paid', 'shipped'),
      defaultValue: 'new'
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};