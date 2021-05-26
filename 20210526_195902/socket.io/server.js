const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client.html');
});


/**
 * socket.io
 */

/* 1. gọi socket.io */
const server = require('http').Server(app);

const io = require('socket.io')(server);

/** 
 * 2. socket có 2 định nghiã
 *   a. on: nhận
 *   b. emit: gửi đi 
 */

// client và server

// client: on và emit
// server: on
// server: emit
// ------------------ lý thuyết ------------------
// a. gửi cho chính người gửi
// cú pháp: socket.emit('key', value)

// b. gửi cho tất cả trừ người gửi
// cú pháp: socket.boardcast.emit('key', value)

// c. gửi cho tất cả
// cú pháp: io.sockets.emit('key', value)

// d. gửi cho người nào mà mình quy định
// cú pháp: io.to(id).emit('key', value)

// ------------------ thực hành ------------------
// kiểm tra kết nối
io.on('connection', (socket) => {
  console.log(`[INFO] ${socket.id} đang online`);

  // nhận giá tri từ client.html
  socket.on('client_foo', (data) => {
    
    // gửi với phương thức tuỳ ý
    io.sockets.emit('server_bar', data);
  })

  // kiểm tra thoát kết nối
  socket.on('disconnect', () => {
    console.log(`[INFO] ${socket.id} đã thoát`);
  });
});





/* 3. tạo server */
server.listen(3000, () => {
  console.log('[INFO] socket.io listening 3000');
});