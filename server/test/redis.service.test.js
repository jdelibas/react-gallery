'use strict'

const test = require('ava')
const proxyquire = require('proxyquire')
const sinon = require('sinon')

test.beforeEach(t => {
  const uri = 'some_redis_uri'

  t.context.redis = {
    createClient: sinon.stub()
  }

  const Redis = proxyquire('./../src/redis.service/index.js', {
    redis: t.context.redis
  })

  t.context.client = new Redis(uri)
})

test('should have valid config', t => {
  // Arrange
  const expected = 'some_redis_uri'
  // Act
  const result = t.context.client.uri
  // Assert
  t.deepEqual(result, expected)
})

test('should create redis client', t => {
  // Arrange
  const expected = { foo: 'bar' }
  // Act
  const result = t.context.redis.createClient.returns(expected)()
  // Assert
  t.deepEqual(result, expected)
})
