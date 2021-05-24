// gọi đên các controller khác

const express = require('express');

const router = express.Router();

// gọi dashboard_controller
const dashboard_controller = require('./dashboard_controller');
router.use('/admin/dashboard', dashboard_controller);

// gọi product_controller
const product_controller = require('./product_controller');
router.use('/admin/products', product_controller);

// gọi category_controller
const category_controller = require('./category_controller');
router.use('/admin/categories', category_controller);

// gọi user_controller
const user_controller = require('./user_controller');
router.use('/admin/users', user_controller);

// xuất
module.exports = router;