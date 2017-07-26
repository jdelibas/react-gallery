'use strict'

// Test modules
const test = require('ava')

const path = require('path')

test.beforeEach(t => {
  t.context.checksum = require('./../src/checksum.service/index.js')
})

test('should return md5 value of string', async t => {
  // Arrange
  const input = 'string'
  const expected = 'b45cffe084dd3d20d928bee85e7b0f21'
  // Act
  const result = await t.context.checksum.md5(input)
  // Assert
  t.is(result, expected)
})

test('should return md5 value of stringified object', async t => {
  // Arrange
  const obj = {
    some: 'object'
  }
  const input = JSON.stringify(obj)
  const expected = '523ee7c7273cca577a6ecac9988c7c69'
  // Act
  const result = await t.context.checksum.md5(input)
  // Assert
  t.is(result, expected)
})

test('should return md5 value of file', async t => {
  // Arrange
  const input = path.resolve(__dirname, './fixtures', 'testfile')
  const expected = '34743e1e454e967eb76a16c66372b0ef'
  // Act
  const result = await t.context.checksum.md5(input)
  // Assert
  t.is(result, expected)
})

test('should return md5 value of image file', async t => {
  // Arrange
  const input = path.resolve(__dirname, './fixtures', 'testimage.jpg')
  const expected = 'cf0562e46688542181168aa675ef7067'
  // Act
  const result = await t.context.checksum.md5(input)
  // Assert
  t.is(result, expected)
})

test('should return sha1 value of string', async t => {
  // Arrange
  const input = 'string'
  const expected = 'ecb252044b5ea0f679ee78ec1a12904739e2904d'
  // Act
  const result = await t.context.checksum.sha1(input)
  // Assert
  t.is(result, expected)
})

test('should return sha1 value of stringified object', async t => {
  // Arrange
  const obj = {
    some: 'object'
  }
  const input = JSON.stringify(obj)
  const expected = 'f119a2f837f87edb69654cf3d7b220dd25f8d274'
  // Act
  const result = await t.context.checksum.sha1(input)
  // Assert
  t.is(result, expected)
})

test('should return sha1 value of file', async t => {
  // Arrange
  const input = path.resolve(__dirname, './fixtures', 'testfile')
  const expected = 'cf048574877806a5536e05a788f287de9a318108'
  // Act
  const result = await t.context.checksum.sha1(input)
  // Assert
  t.is(result, expected)
})

test('should return sha1 value of image file', async t => {
  // Arrange
  const input = path.resolve(__dirname, './fixtures', 'testimage.jpg')
  const expected = '2d6c25a8b9cba3305dea313ff4ba59739dc694ad'
  // Act
  const result = await t.context.checksum.sha1(input)
  // Assert
  t.is(result, expected)
})

test('should throw type error if input isnt path md5', async t => {
  // Arrange
  const input = Buffer.from('')
  const expected = true
  try {
    // Act
    await t.context.checksum.md5(input)
  } catch (e) {
    // Assert
    const result = (e instanceof TypeError)
    t.is(result, expected)
  }
})

test('should throw type error if input isnt path sha1', async t => {
  // Arrange
  const input = Buffer.from('')
  const expected = true
  try {
    // Act
    await t.context.checksum.md5(input)
  } catch (e) {
    // Assert
    const result = (e instanceof TypeError)
    t.is(result, expected)
  }
})

test('should fail to readfile trying to sha1', async t => {
  // Arrange
  const input = path.resolve(__dirname, './fixtures', 'doesntexistfile')
  const expected = 'ENOENT'
  try {
    // Act
    await t.context.checksum.sha1(input)
  } catch (e) {
    // Assert
    t.is(e.code, expected)
  }
})
