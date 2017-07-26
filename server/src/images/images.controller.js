'use strict'

module.exports = {
  get
}

async function get (request, reply) {
  try {
    reply('OK')
  } catch (e) {
    return reply(e)
  }
}
