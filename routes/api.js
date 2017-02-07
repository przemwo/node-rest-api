// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');
var Spendings = require('../models/spendings');
var Categories = require('../models/categories');

// Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

Spendings.methods(['get', 'put', 'post', 'delete']);
Spendings.register(router, '/spendings');

Categories.methods(['get', 'put', 'post', 'delete']);
Categories.register(router, '/categories');

// Return router
module.exports = router;
