//1
let name = "Dmitry"; 
//2
let age = 36; 
//3
let boolean = true; 
//4
let number = 777; 
//5
let string = "ProstoCode"; 
//6
let value = null; 
//7
let valueOther = undefined; 
//8
let city = {}; 
//---------------------------------9
const welcome = function () {
    console.log("Hello, world!");
}
welcome();

//Практика по операторам

//1
console.log(4 > 5);
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

//4
console.log(false <= true); //true

// Данные переменные обьявлены в начале кода.
//5
console.log(number === string); //false

//6
console.log(number >= boolean); //true

//7
console.log(string <= boolean); //false

//8
console.log(number === value); //false

//9
console.log(valueOther <= boolean); //false

//10
console.log(value >= valueOther); //false