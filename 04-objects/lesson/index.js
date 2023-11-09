//Объект--------------------------------------------------------------------------------------------------

//1. Создайте объект car с свойствами brand, model и year, и методом start, который выводит в консоль сообщение "Автомобиль {brand} {model} {year} года выпуска заведен".
const car = {
    brand: 'BMW',
    model: 'X3',
    year: 2023,

    start: () => {
        console.log(`Автомобиль ${car.brand} ${car.model} ${car.year} года выпуска.`)
    }
}
car.start();

//2. Создайте объект user с свойствами name, age и методом greet, который выводит в консоль сообщение "Привет, меня зовут {name}, мне {age} лет".
const user = {
    name: 'Dmitrii',
    age: 36,

    greet: () => {
        console.log(`Привет, меня зовут ${user.name}, мне ${user.age} лет.`)
    }
}
user.greet();

//3. Создайте объект calculator с методами add, minus, multiply и divide, которые принимают два числа в качестве аргументов и выполняют соответствующую математическую операцию, возвращая результат.
const calculator = {
result: 0,

add (numberOne, numberTwo) {
  const result = numberOne + numberTwo;

  console.log(`${numberOne} + ${numberTwo} = ${result}`)

  this.result = result;
},
//--------------------------------------
minus (numberOne, numberTwo) {
  const result = numberOne - numberTwo;

  console.log(`${numberOne} - ${numberTwo} = ${result}`)

  this.result = result;
},
//---------------------------------------
multiply (numberOne, numberTwo) {
  const result = numberOne * numberTwo;

  console.log(`${numberOne} * ${numberTwo} = ${result}`)

  this.result = result;
},
//---------------------------------------
divide (numberOne, numberTwo) {
  const result = numberOne / numberTwo;

  console.log(`${numberOne} / ${numberTwo} = ${result}`)

  this.result = result;
}
}
calculator.add(3,5);
calculator.add(calculator.result,4);
calculator.add(calculator.result, 999);
calculator.minus(calculator.result, 400);
calculator.minus(calculator.result, 200);
calculator.minus(calculator.result, 300);
calculator.multiply(calculator.result, 500);
calculator.multiply(calculator.result, 500);
calculator.divide(calculator.result, 250);
calculator.divide(calculator.result, 300);

console.log(calculator);


//4.Создайте объект book с свойствами title, author и year, и методом getInfo, который выводит в консоль информацию о книге в формате "Название: {title}, Автор: {author}, Год издания: {year}".
const book = {
    title: 'Мертвые души',
    author: 'Гоголь',
    year: 1842,

    getinfo: () => {
        console.log(`Название: ${book.title}, Автор: ${book.author}, Год издания: ${book.year}.`)
    }
}
book.getinfo();

// Массив--------------------------------------------------------------------------------------------------------

// 1. Создайте массив с числами (не менее 10) и выведите его длину.

let arr = [1,2,3,4,5,6,7,8,9,10,11];
console.log (arr.length);

//2. Создайте два новых массива на основании предыдущего, содержащий только чётные и нечётные числа соответственно.

function checkEvenOddNumbers(arr) {
    let evenNumbers = [];
    let oddNumbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      const isEvenOddNumbers = (arr[i] % 2 === 0) ?
        evenNumbers.push(arr[i]) : 
        oddNumbers.push(arr[i]);
      }
    
  
    return {evenNumbers, oddNumbers};
  }
  const result = checkEvenOddNumbers(arr); 
  console.log(result.evenNumbers);
  console.log(result.oddNumbers);

//3. Создайте массив содержащий объекты user, со свойствами age, number, city

const userNew = {
    age: 36,
    number: 1,
    city: 'Anapa',

    getinfo: () => {console.log(`${userNew.age}, ${userNew.number}, ${userNew.city}`)}
}
userNew.getinfo();

//4. Добавьте новый элемент в конец массива и выведите обновленный массив.

console.log(arr.push(12));
console.log(arr);

//5. Удалите первый элемент из массива и выведите обновленный массив.

console.log(arr.shift());
console.log(arr);

//6. Используя метод join(), объедините все элементы массива в одну строку, разделенную запятой.
let array = [0,2,5,10,13,'one','three']
console.log(array.join(','))

//7. Проверьте, содержит ли массив определенный элемент, и выведите соответствующее сообщение.
function checkArrayElement(array, el) {
    if (array.includes(el)) {
      console.log("Массив содержит элемент " + el);
    } else {
      console.log("Массив не содержит элемент " + el);
    }
  }
  checkArrayElement(array, 6);
  checkArrayElement(array,'one');

