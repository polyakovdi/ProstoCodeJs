//----------1
6 > 4 && 10 < 5 //false

(30 + 4) > (7 ** 2) //false

null && true //null

!('hi' + 'hi') && true //false

!('hi' + 'hi') && false //false

//----------2
'Привет' + 'Друг' == !null //false
'Привет' + 'Друг' === !null //false

//----------3
const ten = 10; 
const hundred = 100;
const thousand = 1000;

console.log((ten * ten + hundred) * hundred >= thousand * ten )//true 20000>=10000