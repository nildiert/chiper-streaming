'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('./lib/db')

module.exports = function setupStreamModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('stream', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  })
}
