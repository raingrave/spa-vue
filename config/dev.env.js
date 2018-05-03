'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  API_URL: '"http://studiocred6.localhost/studiocred"',
  NODE_ENV: '"development"'
})
