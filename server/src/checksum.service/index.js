'use strict'

const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

module.exports = {
  md5,
  sha1
}

function md5 (input) {
  if (!isPath(input)) {
    return hashString(input, 'md5')
  }
  return hashFile(input, 'md5')
}

function sha1 (input) {
  if (!isPath(input)) {
    return hashString(input, 'sha1')
  }
  return hashFile(input, 'sha1')
}

function hashFile (path, type) {
  return new Promise((resolve, reject) => {
    let shasum = crypto.createHash(type)
    const stream = fs.ReadStream(path)
    stream.on('data', function (data) {
      shasum.update(data)
    })
    stream.on('end', () => {
      return resolve(shasum.digest('hex'))
    })
    stream.on('error', err => {
      return reject(err)
    })
  })
}

function hashString (data, type) {
  return new Promise((resolve, reject) => {
    let shasum = crypto.createHash(type)
    shasum.update(data)
    return resolve(shasum.digest('hex'))
  })
}

function isPath (input) {
  // https://nodejs.org/api/path.html#path_path_parse_path
  // Naive check, might need to actually check fs
  if (path.parse(input).dir !== '' && !input.includes('http')) {
    return true
  }
  return false
}
