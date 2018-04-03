'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  API_URL: '"http://api.studiocloud.com.br/studiocred"',
  NODE_ENV: '"development"'
})
