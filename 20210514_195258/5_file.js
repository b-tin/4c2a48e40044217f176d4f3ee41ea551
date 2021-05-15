/* ------------------------------------------
   load thư viện
   ------------------------------------------*/
const fs = require('fs');

/* ------------------------------------------
   đọc file
   ------------------------------------------*/
fs.readFile('./example/5/test.txt', (err, data) => {
    if (err) throw err;

    console.log(data.toString());
});

// -- no such file or directory
// fs.readFile('./example/5/test_no_exits.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// -- tìm hiểu fs.readFileSync()

/* ------------------------------------------
   tạo file
   ------------------------------------------*/
// -- appendFile(), appendFileSync()
// -- tạo file và thêm content vào cuối file
fs.appendFile('./example/5/test_appendFile.txt', 'example content appendFile', (error) => {
    if (error) throw error;
    console.log('appendFile: created file ./example/5/test_appendFile.txt')
});

// -- open(), openSync()
// -- tạp file empty content
fs.open('./example/5/test_open.txt', 'w', (error, file) => {
    if (error) throw error;
    console.log('open: created file ./example/5/test_open.txt')
});

// -- writeFile(), writeFileSync()
// -- tạo file and overwite if exits
fs.writeFile('./example/5/test_writeFile.txt', 'example content writeFile', (error) => {
    if (error) throw error;
    console.log('writeFile: created file ./example/5/test_writeFile.txt')
});

/* ------------------------------------------
   sửa file
   ------------------------------------------*/
// -- appendFile()
// -- writeFile()

/* ------------------------------------------
   xoá file
   ------------------------------------------*/
fs.unlink('./example/5/test_open.txt', (error) => {
    if (error) throw error;
    console.log('unlink: deleted file ./example/5/test_open.txt')
});

/* ------------------------------------------
   tạo folder
   ------------------------------------------*/
fs.mkdir('./example/5/create_folder', (error) => {
    if (error) throw error;
    console.log('mkdir: created folder ./example/5/create_folder')
});