const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('[INFO] hello from /');
});

app.post('/tinh_tong/:a/:b', (req, res) => {
  res.send('[INFO] ket qua: ' + (parseInt(req.params.a) + parseInt(req.params.b)));
});

/**
 * JWT json web token (head + payload + signature)
 * https://topdev.vn/blog/jwt-la-gi/
 */

/* 1. tạo token */



app.listen(3000, () => {
  console.log('[INFO] server listening port 3000');
})
