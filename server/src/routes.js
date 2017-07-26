'use strict'

const controller = require('./images/images.controller')

module.exports = [{
  method: 'GET',
  path: '/',
  handler: controller.get
}]
