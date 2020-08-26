'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('./lib/db')

module.exports = function setupLikesModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('likes', {
    usr_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    str_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'stream',
        key: 'id'
      }
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
