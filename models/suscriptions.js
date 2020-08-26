'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('./lib/db')

module.exports = function setupSuscriptionsModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('suscriptions', {
    usr_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    channels_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'channels',
        key: 'id'
      }
    }

  })
}
