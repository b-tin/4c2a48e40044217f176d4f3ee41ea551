const express = require('express');

const app = express();

/**
 * gọi ejs
 */
app.set('view engine', 'ejs');

// 1. <%- name %>                   : render html
// 2. <%= name %>                   : render text
// 3. <%- include('path') %>        : gọi đến file
// 4. <% if, for, forEach, ... %>

/**
 * đường dẫn tĩnh
 */
app.use(express.static('public'));

/**
 * gọi db
 */
require('./core/db');


/**
 * gọi đên control_controller
 */
const control_controller = require('./controllers/control_controller');
app.use('/', control_controller);


app.listen(3000, () => {
    console.log('[INFO] server listening on port 3000');
});