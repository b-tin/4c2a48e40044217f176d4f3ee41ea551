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
// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: '0e654a9b85@gmail.com',
//         pass: '438d75834f0bd6b8c601f355cef1e1b8'
//     }
// });

// var mailOptions = {
//     from: 'no-reply@gmail.com',
//     to: 'bkvtin@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

/**
 * cookie
 */

const cookie = require('cookie-parser');
app.use(cookie());

/* 1. tạo cookie */
app.get('/create_cookie', (req, res) => {
    // set cookie key=value, ex foo=bar
    res.cookie('foo', 'bar', {maxAge: 1000 * 20}).end('[INFO] created cookie'); // sau 20 seconds sẽ hết thời gian sống
});

/* 2. sử dụng cookie */
app.get('/use_cookie', (req, res) => {
    res.send(req.cookies.foo);
});

/* 3. xoá cookie */
app.get('/delete_cookie', (req, res) => {
    res.clearCookie('name').end('[INFO] deleted cookie');
});


/**
 * upload file
 */

const multer = require('multer');

/* 1a. cấu hình nơi lưu trữ, tên file */
/* 1b. ảnh không được trùng */
/* 1c. kiểm tra đuôi ảnh */
/* 1d. dung lượng của ảnh */

const storage = multer.diskStorage({
    // đường dẫn lưu file upload
    destination: function (req, file, callback) {
        callback(null, 'upload/images');
    },
    // thông tin file
    filename: function (req, file, callback) {
        if (file.mimetype == 'image/png') {
            callback(null, `${Date.now()}_${file.originalname}`); // Date.now() + lấy lại tên ảnh
        } else {
            return callback('[ERROR] app.js: sai định dạng ảnh png');
        }
    }
});

const limits = { fileSize: 1024*50 } // 50KB


/* 2. cấu hình gọi sử dụng multer 
   file: name của input
   array('file'): upload nhiều files cùng lúc
*/
const upload_file = multer({ storage, limits }).single('file_upload'); 
// file_upload: name field bên html form 
    // <form action="" method="POST" enctype="multipart/form-data" id="formUpload">
    // <label for="file">file</label>
    // <input type="file" name="file_upload" id="file" required>
    //     <button type="submit">upload file</button>
    // </form>

app.post('/upload_file', (req, res) => {
    // res.send('[DEBUG] debug');
    upload_file(req, res, (error) => {
        if (error) {
            res.send({ result: 0, message: `[ERROR] ${error}`});
        } else {
            // console.log('[INFO] upload thành công');
            res.send({ result: 1, message: '[INFO] upload thành công' });
        }
    });
});

/**
 * main
 */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    // res.send('[INFO] hello from /');
});



app.listen(3000, () => {
    console.log('[INFO] server listening on port 3000');
});