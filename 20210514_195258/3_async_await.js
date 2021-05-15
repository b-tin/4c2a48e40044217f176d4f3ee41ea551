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
d()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

e()
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});

// -- xử lý không bất đồng bộ giữa d và e, d phải xong rồi mới tới e
d()
.then((result_d) => e())
.then((result_e) => {
    console.log(result_e);
})
.catch((error) => {
    console.log(error);
});

/* ------------------------------------------
   async await (xử lý promsise hell)
   ------------------------------------------*/
// -- async await làm code gọn hơn
async function ketqua() {
    await d();
    await e();
}
ketqua();