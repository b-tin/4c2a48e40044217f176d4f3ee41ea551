const express = require('express');

const app = express();

/**
 * middleware
 */
check = (req, res, next) => {
  var a = 2;
  if (a == 1) {
    res.send('[MIDDLEWARE] phần xử lý trung gian')
  } else {
    next();
  }
}

app.get('/', check, (req, res) => {
  res.send('[INFO] hello from /')
});

/**
 * bcrypt
 */



app.listen(3000, () => {
  console.log('[INFO] server running on port 3000');
});