const express = require('express');

const app = express();

/**
 * gửi email
 */
/*
    -- 1. tài khoản gửi email
    -- 1.1 bật POP/IMAP
    -- 1.2 bật quyền truy cập bên thứ 3
    -- 1.3 xác nhận lần đâu tiên đăng nhập
    -- 2. code
*/
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '0e654a9b85@gmail.com',
        pass: '438d75834f0bd6b8c601f355cef1e1b8'
    }
});

var mailOptions = {
    from: 'no-reply@gmail.com',
    to: 'bkvtin@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

app.get('/', (req, res) => {
    res.send('[INFO] hello from /');
});

app.listen(3000, () => {
    console.log('[INFO] server listening on port 3000');
});