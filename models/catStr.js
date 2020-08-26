'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('./lib/db')

module.exports = function setupCatStrModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('catStr', {
    cat_id: {
      type: Sequelize.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'categories',
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
    }

  })
}
