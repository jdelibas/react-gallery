'use strict'

const bluebird = require('bluebird')
const redis = bluebird.promisifyAll(require('redis'))

module.exports = class Redis {
  constructor (uri) {
    this.uri = uri
    this.client = redis.createClient(this.uri)
  }
}
