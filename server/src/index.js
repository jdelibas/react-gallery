http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1
return axios.get(`${this.url}&tags=${tag}`)

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
  port: config.port
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
