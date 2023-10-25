let name = "Dmitry"; //1
let age = 36; //2
let boolean = true; //3
let number = 777; //4
let string = "ProstoCode"; //5
let value = null; //6
let valueOther = undefined; //7

let city = {}; //8
//---------------------------------9
const welcome = function () {
    console.log("Hello, world!")
}
welcome();

//Практика по операторам

//1
console.log(4 > 5)
//----------
let x = 7;
let y = 8;

let z = x <= y;
console.log(z); //true

//2
console.log("Hello"==="world"); //false
//----------
let stringOne = "Hello";
let stringTwo = "Hello";

let resultOne = stringOne === stringTwo;
console.log(resultOne); //true

//3
console.log("Russia"=== 42); //false
//----------
let country = "Russia";
let barCode = 42;

let resultTwo = country === barCode;
console.log(resultTwo); //false


