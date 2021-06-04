const express = require('express');

const router = express.Router();

const oop = require('../core/oop');

router.get('/', (req, res) => {
    // res.send('[INFO] hello from /');
    // let main = '<i>trang chủ</i>';

    // sử dụng oop
    // truyền orginalUrl (ex: /admin/dashboard) cho module oop
    const kq = new oop(req.originalUrl);

    // modules
    const modules = kq.get_modules();

    let main = 'home/main';
    res.render('index', { main, modules }); // views/index.ejs
});

module.exports = router;