'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('./lib/db')

module.exports = function setupUsersModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
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
