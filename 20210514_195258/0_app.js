/* ------------------------------------------
   callback 
   ------------------------------------------*/
// function a(f) {
//     setTimeout(() => {
//         console.log(1);
//         f();
//     }, 1000);
// }

// function b() {
//     console.log(2);
// }

// a();
// b();
// a(b);

/* ------------------------------------------
   callback hell
   ------------------------------------------*/
// function c(so, callback) {
//     setTimeout(() => {
//         console.log(so);
//         callback();
//     }, 1);
// }

// c(1, () => {
//     c(2, () => {
//         c(3, () => {
//             c(4, () => {
//                 c(5, () => {
                    
//                 })
//             })
//         })
//     })
// });


/* ------------------------------------------
   promise
   ------------------------------------------*/
// -- 1 cú pháp khai báo

// -- vd 1
// const p = new Promise((resolve, reject) => {
//     // đúng trả về kết quả
//     // resolve('p: hello promise');
//     // lỗi
//     reject('p: error');
// });

// p
// .then((results) => { // resolve
//     console.log(results);
// })
// .catch((error) => { // reject
//     console.log(error);
// });

// -- vd 2
// const p2 = new Promise((resolve, reject) => {
//     let kq=2;
//     if (kq == 1) {
//         resolve('p2: equal 1');
//     } 
//     reject('p2: error not equal 1');
// });

// p2
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

// -- vd 3
function d() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let kq = 1;
            if (kq == 1) {
                console.log('d: equal 1');
                resolve('d: equal 1');
            }
            reject('d: error not equal 1');
        }, 1000);
    })
}

function e() {
    return new Promise((resolve, reject) => {
        let kq = 2;
        if (kq == 2) {
            console.log('e: equal 2');
            resolve('e: equal 2');
        }
        reject('e: error not equal 1');
    })
}


// -- bất đồng bộ giữa d và e, d phải xong rồi mới tới e, nhưng e xong trươc in ra trước
// d()
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

// e()
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

// -- xử lý không bất đồng bộ giữa d và e, d phải xong rồi mới tới e
// d()
// .then((result_d) => e())
// .then((result_e) => {
//     console.log(result_e);
// })
// .catch((error) => {
//     console.log(error);
// });

/* ------------------------------------------
   async await (xử lý promsise hell)
   ------------------------------------------*/
// -- async await làm code gọn hơn
async function ketqua() {
    await d();
    await e();
}
ketqua();