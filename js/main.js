import{tinhTongHaiSo, tinhHieuHaiSo} from "./test.js";
import ProductList from "./product.js"; // có thể đặt tên khác khi sử dựng export default

const tong = tinhTongHaiSo();
console.log(tong);
const hieu = tinhHieuHaiSo();
console.log(hieu);

const product = new ProductList("Samsung", 1000);
console.log(ProductList.name);
console.log(ProductList.price);


// ở ES5 nếu console trước thì js vẫn khai báo 1 biến var bien ở trên console nhưng ko có giá trị (gọi là hoisting bien)
console.log(bien); // ra kq undefine
var bien = "Ha";

// ES6
// Khai báo biến dùng let / const
// let namee = "Ha";
// let namee = "Ngoc"
// console.log(namee); // bị lỗi do dùng let thì ko dc đặt tên biến trùng dc.

// console.log(nam);
// let nam = "Anh"; // lúc này js ko hoisting biến nam, mà báo lỗi.

// const PI = 3.14;
// console.log(PI);


// function scope
function foo1() {
    var x = 10;
    if (true) {
        //block scope
        var x = 20;
        console.log(x); // => 20
    }
    // khi thoát ra lệnh if (block scope) thì lúc này biến x gán giá trị 20 luôn.
    console.log(x); // => 20
}
foo1();

function foo2() {
    let x = 10;
    if (true) {
        //block scope
        let x = 20;
        console.log(x); // => 20
    }
    // khi thoát ra lệnh if thì x = 20 biến mất
    console.log(x); // => 10
}
foo2();

for (var i = 0; i < 4; i++) {
    console.log(i);// => 0,1,2,3
}
console.log(i); // => 4

for (let j = 0; j < 4; j++) {
    console.log(j);// => 0,1,2,3
}
//console.log(j); // => lỗi, vì for cũng là vòng block scope

// => khai báo biến bằng var ra khỏi block scope vẫn xài dc, còn bằng let thì ko dc



// Arrow function 
// dùng const là hàm cố định ko đổi. vẫn có thể dùng let
const hello = () => {
    console.log("hello");
};

const hello2 = () => 10 // là return ra giá trị 10 luôn, rút gọn hơn
const hello3 = (a) => 10

// phải gọi hàm sau khi khai báo, ko gọi trc đó.
hello();
var number = hello();


// VD:
let sinhVien = {
    hoTen: "Ngoc",
    lop: "BC20",

    // nếu viết function theo ES5 phải dùng bind(this) thì mới hiểu
    // getInfo: function(){
    //     function show(){
    //         console.log("Ten la ", this.hoTen);
    //         console.log("Lop la ", this.lop);
    //     }
    //     let hienthi = show.bind(this); // gán hienthi thành 1 hàm show.bind(this)
    //     hienthi();
    // },


    // khi sử dung arrow function
    getInfo: function () {
        const show = () => {
            console.log("Ten la ", this.hoTen);
            console.log("Lop la ", this.lop);
        };
        show();
    }

};
sinhVien.getInfo();

var namer = "Ha";
function ngoai(){
    function trong (){
        console.log("tên là "+ namer);
    }
    return trong();
}
var chay = ngoai;
chay();

// Rest Params

// const tinhTong = (a,b) =>{
//     const total = a+b;
//     return total;
// }
// const total = tinhTong(1,2);
// console.log(total);

// const tinhTong = (...numbers) =>{
//     let total = 0;
//     numbers.forEach((number)=>{
//         total +=number;
//     });
//     return total;
// }

// hàm duyệt mảng reduce
const tinhTong = (...numbers) =>{
    return numbers.reduce((total, number)=>{ // return là để return Kq của hàng tính tổng
        return total + number;// return này để tích lũy cộng dồn
    }, 0) // số 0 sẽ đại diện cho giá trị ban đầu của total (thay vì phải gán như hàm forEach trên)
    // rút gon
    // return numbers.reduce((total, number)=> total + number, 0);
}

const total = tinhTong(1,2,3,4);
console.log(total);

// spead Operator

// kiểu Array
let mangA = [1,2,3];
let mangB = [...mangA]; // do kiểu dữ liệu là array
mangB.push(4);
mangB.push(5);

// rút gọn: let mangB = [...mangA,4,5];

console.log(mangA); // 1,2,3
console.log(mangB); // 1,2,3,4,5

// kiểu object
let obj = {
    name: "Ha",
    age: 18,
};
// let objNew = {...obj};
// objNew.lop = "BC20";
// rút gọn 
let objNew = {...obj,lop: "BC20"};

console.log(obj);
console.log(objNew);

// Destructuring
// của kiểu array
let arr = ["Ha", 18];
const [xname, age] = arr; // xname, age tên tự khai báo
console.log(xname, age);
// của kiểu object
let objP = {
    ten: "Ha",
    tuoi: 3,
};
const {ten, tuoi} = objP; // ten, tuoi là tên của thuộc tính ở trên (phải viết giống)

// string template
const user = "Ha";
//const rs = "Hello" + user;
const rs = `Hello ${user}`
console.log(rs);

// Object literal
let firstName = "Ha";
let lastName = "Anh";
let objUser = {
    firstName, // rút gọn từ firstName: firstName,
    lastName, //lastName: lastName,
};
console.log(objUser);

// vòng lặp For Of - For in
let listUser = ["Ha", "Ngoc", "Anh"];
for(let item of listUser){
    console.log(item); // xuất ra gía trị 
}

for(let i in listUser){
    console.log(i); // xuất ra i là số chỉ mục/ vị trí index
}

// forEach ko tạo ra mảng mới
listUser.forEach((item, index) =>{
    console.log(index, item);
});

// map tạo ra mảng mới (sd return)
const newArray = listUser.map((item, index)=>{
    return index * 2;
    //console.log(index, item);
});
console.log(newArray);














