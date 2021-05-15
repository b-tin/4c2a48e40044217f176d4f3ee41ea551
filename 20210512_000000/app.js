// xuất dữ liệu để kiểm tra
// console.log('hello');

// khai báo biến : var, let, const
// đặt tên biến: name
// kiểu dữ liệu: object, string, number, array, boolean, undefined

// <khai báo biến> <tên biến> = <kiểu dữ liệu>

var name = 5;

// object

// 1. khai báo
var obj = {
    name: 'Nguyễn Văn A', // string
    age: 20, // number
    results: function(){
        return this.name + ' có tuổi là ' + this.age;
    }
}

// 2. sử dụng
//console.log( obj.results() );

// string

// 1. khai báo
var str = 'hello'; // or ""
// 2. cách sử dụng
//console.log(str);

// number

// 1. khai báo
var number = 1;
// 2. sử dụng
//console.log(number);

// array

// 1. khai báo
var array = [1,2,3,4,5,6]; // 0=>1, 1=>2, 2=>3, 3=>4, 4=>5, 5=>6
// 2. sử dụng
//console.log( array[2] );

// boolean
var boolean = true; // false

// undefined
var u;

//console.log(u);

// thuật toán
// giải phương trình bậc 1: ax + b = 0
// nếu a=0 : PTVN
// nếu a!=0 : PT có nghiệm là x = (-b)/a

// khai báo biến
//var a=0, b=2, kq='';

// === 0 : chắc chắn data type phải là number

// if(a==0)
// {
//     kq='PTVN';
// }
// else
// {
//     kq='PT có nghiệm: ' + (-b)/a;
// }

//kq = (a==0) ? 'PTVN' : 'PT có nghiệm: ' + (-b)/a;

//console.log(kq);

function giai_PTB1(a, b)
{
    return (a==0) ? 'PTVN' : 'PT có nghiệm: ' + (-b)/a;
}

//console.log( giai_PTB1(1,2) );

// giải PTB2 có dạng: ax2 + bx + c = 0
function giai_PTB2(a, b, c)
{
    var kq='';

    if(a==0)
    {
        kq=giai_PTB1(b, c);
    }
    else
    {
        var delta = b*b - 4*a*c;

        if(delta < 0)
        {
            kq = 'PTVN';
        }
        else if(delta == 0)
        {
            kq = 'PT có nghiệm kép x1=x2=' + (-b) / (2*a);
        }
        else
        {
            var x1, x2;

            x1 = ( (-b) + Math.sqrt(delta) ) / (2*a);
            x2 = ( (-b) - Math.sqrt(delta) ) / (2*a);

            kq = 'PT có 2 nghiệm phân biệt x1='+x1+' và x2='+x2;
        }
    }

    return kq;
}