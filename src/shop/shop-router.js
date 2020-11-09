const express = require('express')
const ShopService = require('./shop-service')

const ShopRouter = express.Router()
const jsonBodyParser = express.json()


module.exports = ShopRouter;