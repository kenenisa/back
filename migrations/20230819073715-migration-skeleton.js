'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await queryInterface.createTable('users', {
      empId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      FirstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      LastName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Sex: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Skill: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      SkillType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      School: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      SchoolAdd: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      SkillLevel: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
