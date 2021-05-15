/* ------------------------------------------
   promise
   ------------------------------------------*/
// -- 1 cú pháp khai báo

// -- vd 1
const p = new Promise((resolve, reject) => {
    // đúng trả về kết quả
    // resolve('p: hello promise');
    // lỗi
    reject('p: error');
});

p
.then((results) => { // resolve
    console.log(results);
})
.catch((error) => { // reject
    console.log(error);
});

// -- vd 2
const p2 = new Promise((resolve, reject) => {
    let kq=2;
    if (kq == 1) {
        resolve('p2: equal 1');
    } 
    reject('p2: error not equal 1');
});

p2
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});