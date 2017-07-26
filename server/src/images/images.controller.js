'use strict'

const API = 'http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1'
const axios = require('axios')

const config = require('./../config')
const checksum = require('./../checksum.service')
const Redis = require('./../redis.service')
const redis = new Redis(config.redis).client

module.exports = {
  get
}

async function get (request, reply) {
  const params = {
    tags: request.query.tags
  }
  try {
    const url = `${API}?tags=${params.tags}`
    const hashKey = await checksum.md5(url)

    const exists = await redis.existsAsync(hashKey)
    if (!exists) {
      const res = await axios.get(url)
      const images = {
        items: res.data.items
      }
      await redis.setexAsync(hashKey, 900, JSON.stringify(images))
      return reply(images)
    }

    const cached = await redis.getAsync(hashKey)
    return reply(JSON.parse(cached))
  } catch (e) {
    return reply(e)
  }
}
