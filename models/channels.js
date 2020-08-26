'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('./lib/db')

module.exports = function setupChannelsModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('channels', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.TEXT,
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
