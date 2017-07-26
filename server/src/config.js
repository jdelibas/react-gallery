'use strict'

module.exports = {
  port: process.env.PORT || 8080,
  redis: process.env.REDISURI || 'redis://lcoalhost:6379/0'
}
