'use strict'
const Sequelize = require('sequelize')
let sequelize = null // singleton  only return an instance

module.express = function setupDatabase (config) {
  if (!sequelize) {
    sequelize = new Sequelize(config)
  }
  return sequelize
}
