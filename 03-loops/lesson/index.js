// 1. Написать цикл, который выводит все числа от 1 до 10.  - while do
/*
let counter = 1;

while(counter <= 10){
    console.log(counter);
    counter += 1;
}
*/
console.log('-----------------------------------');
// 2. Написать цикл, который выводит все четные числа от 1 до 100. - do while - пройтись по циклу от 1 до 100, определить является ли число чётным, если да, то выводим его в консоль, иначе ничего не происходит

let counter = 1;

do {
    console.log(counter)
    counter +=2;
} while (counter <=100)

console.log('-----------------------------------');
// 3. Написать цикл, который выводит все числа от 100 до 1 (в обратном порядке). for

for (let counter = 100; counter >=1; counter--){
    console.log(counter)
}

console.log('-----------------------------------');
//4. Написать цикл, который выполняется 20 раз, каждую итерацию выводится сообщение на экран - число ${число} - ${чётное / нечётное} , т.е, внутри цикла сперва необходимо определить является ли число чётным или нет - for

for (let counter = 1; counter <=20; counter++){
  const isEven = counter % 2 === 0;
  
  const numberType = isEven ? 'четное' : 'нечетное';

  const message = `'число' ${counter} - ${numberType}`;

  console.log(message);
}
console.log('---------------------------------');
// 5. Написать функцию, которая считает сумму всех чисел от 1 до 100.

let result = 0;
    for (let counter = 1; counter <= 100; counter++){
        const sum = result + counter;
        console.log(`${result} + ${counter} = ${sum}`);
        result += counter;
    }
console.log('-----------------------------------');

// Калькулятор
let calcResult = 0;

const sum = (numberOne, numberTwo) => {
  const result = numberOne + numberTwo;

  console.log(`${numberOne} + ${numberTwo} = ${result}`)

  return result;
}
//--------------------------------------
const minus = (numberOne, numberTwo) => {
  const result = numberOne - numberTwo;

  console.log(`${numberOne} - ${numberTwo} = ${result}`)

  return result;
}
//---------------------------------------
const multiply = (numberOne, numberTwo) => {
  const result = numberOne * numberTwo;

  console.log(`${numberOne} * ${numberTwo} = ${result}`)

  return result;
}
//---------------------------------------
const divide = (numberOne, numberTwo) => {
  const result = numberOne / numberTwo;

  console.log(`${numberOne} / ${numberTwo} = ${result}`)

  return result;
}

calcResult = sum(3,5);
calcResult = sum(calcResult, 4);
calcResult = sum(calcResult, 999);
calcResult = minus(calcResult, 400);
calcResult = minus(calcResult, 200);
calcResult = minus(calcResult, 300);
calcResult = multiply(calcResult, 500);
calcResult = multiply(calcResult, 500);
calcResult = divide(calcResult, 250);
calcResult = divide(calcResult, 300);

console.log(calcResult);

console.log('-----------------------------');
//----------------Доп. задачи.----------------------------

// 1. Напишите программу, в которой с помощью console. log выводятся все чис­ла от 1 до 100 с двумя исключениями. Для чисел, кратных 3, вместо числа выводится "Fizz", а для чисел, кратных 5 (но не 3), - "Buzz". 


for (let i = 1; i <=100; i++){
    if(i % 3 === 0){
        console.log("Fizz");
    } else if(i % 5 === 0 && i % 3 !==0){
        console.log("Buzz");
    } else
    console.log(i);
  }

// 2. Когда это заработает, измените программу так, чтобы она печатала "FizzBuzz" для чисел, которые делятся и на 3, и на 5 (и по-прежнему печатайте "Fizz" или "Buzz" для чисел, кратных только одному из них).


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }


// 3. Напишите программу, которая создает строку, представляющую сетку 8 х 8, используя для разделения строк символы новой строки. В каждой позиции сетки стоит либо пробел, либо символ"#". Эти символы должны распола­гаться в шахматном порядке.


let strOne = '# # # # ';
let strTwo = ' # # # #';
for (let i = 0; i < 8; i++) {
    if (i % 2 === 0){
        console.log(`${strOne}\n`);   
    } else {
        console.log(`${strTwo}\n`)
    }  
  }











