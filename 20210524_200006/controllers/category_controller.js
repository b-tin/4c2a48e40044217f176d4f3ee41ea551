const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // res.send('[INFO] hello from /');
    // let main = '<i>trang chủ</i>';

    let main = 'category/main';
    res.render('index', { main }); // views/index.ejs
});

module.exports = router;