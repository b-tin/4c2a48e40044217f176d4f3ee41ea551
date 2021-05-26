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

const jwt = require('jsonwebtoken');
const secret = 'day_la_secret';

/* 1. tạo token */
app.get('/create_token', (req, res) => {
  const payload = {
    name: 'foo',
    username: 'bar',
    email: 'foo@bar.local',
    role: 'user'
  }

  const token = jwt.sign(payload, secret, {expiresIn: 60}); // expire after 60 seconds

  res.send(`[INFO] new token: ${token}`);
  // [INFO] new token: chia làm 3 phần, cách nhau bởi dấu chấm .
  // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZm9vIiwidXNlcm5hbWUiOiJiYXIiLCJlbWFpbCI6ImZvb0BiYXIubG9jYWwiLCJyb2xlIjoidXNlciIsImlhdCI6MTYyMjAzNTczOCwiZXhwIjoxNjIyMDM1Nzk4fQ.vfm14zQxo602fxzQ7wXtLvokAtAoTj5I0Zxq7YQTHfY
});

/* 2. xác nhận token */
app.get('/verify_token', (req, res) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZm9vIiwidXNlcm5hbWUiOiJiYXIiLCJlbWFpbCI6ImZvb0BiYXIubG9jYWwiLCJyb2xlIjoidXNlciIsImlhdCI6MTYyMjAzNjI4OSwiZXhwIjoxNjIyMDM2MzQ5fQ.KN7eWDnHlc2OaaWnjLoanbXs9IQBDaVcT5JX-waCgZM';

  jwt.verify(token, secret, (err, data) => {
    if (err) res.send({err});
    // {
    //     "err": {
    //         "name": "TokenExpiredError",
    //         "message": "jwt expired",
    //         "expiredAt": "2021-05-26T13:29:58.000Z"
    //     }
    // }


    res.send({data});
    // {
    //     "data": {
    //         "name": "foo",
    //         "username": "bar",
    //         "email": "foo@bar.local",
    //         "role": "user",
    //         "iat": 1622036289,
    //         "exp": 1622036349
    //     }
    // }
  });
});


app.listen(3000, () => {
  console.log('[INFO] server listening port 3000');
})
