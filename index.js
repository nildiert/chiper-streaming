'use strict'
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const path = require('path')
const port = process.env.port || 3000

app.use(express.static(path.join(__dirname, '/public')))

// definiendo una ruta que será llamada cuando accedemos a la página de inicio
app.get('/', function (req, res) {
  res.redirect('index.html')
})

// websocket se encarga de la transmision en tiempo real de la información hacia todos los clientes conectados
io.on('connection', function (socket) {
  socket.on('stream', function (image) {
    socket.broadcast.emit('stream', image)
  })
})

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', msg) // emitiendo el eventro chat_message
  })
})

// we make to http listen in port defined in port  ._.
http.listen(port, function () {
  console.log(`listening on http://localhost:${port}`)
})

// implementando los modulos en DB
const setupDatabase = require('./models/lib/db')
const setupCategoriesModel = require('./models/categories')
const setupCatStrModel = require('./models/catStr')
const setupChannelsModel = require('./models/channels')
const setupLikesModel = require('./models/likes')
const setupRolesModel = require('./models/roles')
const setupStreamModel = require('./models/stream')
const setupSuscriptionsModel = require('./models/suscriptions')
const setupUsersModel = require('./models/users')

// definiendo entidades como objetos
module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const categoriesModel = setupCategoriesModel(config)
  const catStrModel = setupCatStrModel(config)
  const channelsModel = setupChannelsModel(config)
  const likesModel = setupLikesModel(config)
  const rolesModel = setupRolesModel(config)
  const streamModel = setupStreamModel(config)
  const suscriptionsModel = setupSuscriptionsModel(config)
  const usersModel = setupUsersModel(config)

  // definiendo relaciones
  // 1:n
  usersModel.hasMany(channelsModel)
  channelsModel.belongsTo(usersModel)
  // n:n
  suscriptions.belongsTo(usersModel)
  suscriptions.belongsTo(rolesModel)
  // 1:n
  usersModel.hasMany(rolesModel)
  rolesModel.belongsTo(usersModel)

  // probando conexión a db
  await sequelize.authenticate()

  const categories = {}
  const stream = {}
  const catStr = {}
  const channels = {}
  const users = {}
  const likes = {}
  const suscriptions = {}
  const roles = {}

  return {
    categories, stream, catStr, channels, users, likes, suscriptions, roles
  }
}
