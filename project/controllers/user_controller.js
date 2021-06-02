const express = require('express');

const router = express.Router();

// gọi model
const user_model = require('../models/user_module');

router.get('/', (req, res) => {
    // res.send('[INFO] hello from /');
    // let main = '<i>trang chủ</i>';

    let main = 'users/main';
    res.render('index', { main }); // views/index.ejs
});

module.exports = router;