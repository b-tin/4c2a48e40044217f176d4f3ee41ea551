const express = require('express');

const app = express();

const bcrypt = require('bcrypt');


/**
 * bcrypt
 * https://www.npmjs.com/package/bcrypt
 */
const saltRounds = 10;
const password = 'changeme';

// -- 1. tao chuỗi mã hoá
bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
        console.log(`[INFO] bcrypt genSalt: ${hash}`)
    });
});

const hash = '$2b$10$Zcnvr2ypm6CWqYX4HE1RjeK/wgtobPSE29eTk9c6GtimmJUVrs60C';

// -- 2. xác nhận mã hoá, true or false
bcrypt.compare(password, hash, function (err, result) {
    console.log(`[INFO] bcrypt compare: ${result}`)
});

app.listen(3000, () => {
    console.log('[INFO] server running on port 3000');
});