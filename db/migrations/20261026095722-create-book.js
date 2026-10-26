'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
         allowNull: false,
        type: Sequelize.TEXT
      },
      year: {
         allowNull: false,
        type: Sequelize.INTEGER
      },
      genre: {
         allowNull: false,
        type: Sequelize.TEXT
      },
      authorId:{
         allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          key: 'id',
          model: 'Authors'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};