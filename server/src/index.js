'use strict'

const Hapi = require('hapi')
const config = require('./config')
const routes = require('./routes')

const server = new Hapi.Server({
  debug: {
    'request': ['error', 'uncaught']
  }
})

server.connection({
  port: config.port,
  routes: {
    cors: true
  }
})

server.register([
  require('hapi-async-handler')
], (err) => {
  if (err) {
    throw err
  }

  server.route(routes)

  server.start(err => {
    if (err) {
      throw err
    }
    console.log(`Server running at ${server.info.uri}`)
  })
})
