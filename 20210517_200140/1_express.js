const express = require('express');

/**
 * import body-parser
 */
const bodyParser = require('body-parser');
const app = express();

var port = 3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/**
 * import class toan_hoc
 */
const toan_hoc = require('./1_class_toan_hoc');

/**
 * @param request, response
 */
app.get('/', (req, res) => {
    res.send('[INFO] hello from /')
});

app.get('/foo', (req, res) => {
    res.send('[INFO] hello from /foo')
});

/**
 * giải phương trình bậc 1
 * với 2 parameter a và b
 */
app.get('/giai_phuong_trinh_bac_1/:a/:b', (req, res) => {
    // console.log(req);
    a = req.params.a;
    b = req.params.b;
    const ket_qua = new toan_hoc();
    res.send(`[INFO] 
                giai_phuong_trinh_bac_1 a=${a} và b=${b}, 
                kết quả: ${ket_qua.giai_phuong_trinh_bac_1(a, b)}`);
});


app.post('/giai_phuong_trinh_bac_1', (req, res) => {
    // console.log(req.body);
    // res.send('[DEBUG] a: ' + req.body.a + ' và b:' + req.body.b);

    a = req.body.a;
    b = req.body.b;
    const ket_qua = new toan_hoc();
    res.send(ket_qua.giai_phuong_trinh_bac_1(a, b));
});

app.get('/view_from_giai_phuong_trinh_bac_1', (req, res) => {
    res.header(200);
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(port, () => {
    console.log(`[INFO] server is listening on port :${port}`);
});