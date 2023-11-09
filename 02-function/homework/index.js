//------------------------Условные конструкции
let isOpenDoor = true;

if (isOpenDoor) {
  console.log("Дверь открыта");
} else {
  console.log("Дверь закрыта");
}
//--------------------------------------------
let userStatus = prompt("Введите ваш статус (бронза, серебро, золото):");
let amountDiscount;
if (userStatus === "бронза") {
  amountDiscount = 10;
} else if (userStatus === "серебро") {
  amountDiscount = 15;
} else if (userStatus === "золото") {
  amountDiscount = 20;
} else {
  amountDiscount = 0;
}
console.log(
  `Приветствуем вас! Ваш статус: ${userStatus} и ваша скидка составляет: ${amountDiscount}%`
);
//--------------------------------------------
let clientStatus = prompt(
  "Введите ваш статус (бронза, серебро, золото, платина, палладий):"
);
let discount;

switch (clientStatus) {
  case "бронза":
    discount = 10;
    break;
  case "серебро":
    discount = 15;
    break;
  case "золото":
    discount = 20;
    break;
  case "платина":
    discount = 25;
    break;
  case "палладий":
    discount = 40;
    break;
  default:
    discount = 5;
    clientStatus = "железо";
}

console.log(
  `Приветствуем вас! Ваш статус: ${clientStatus} и ваша скидка составляет: ${discount}%`
);

//-------------------------------------Функции
function printUserName() {
  let userName = "Dmitry";
  console.log(`Привет, ${userName}!`);
}

printUserName();
//-------------------------------------------1
function printUserName(userName) {
  console.log(`Привет, ${userName}!`);
}
printUserName("Dmitry");
//-------------------------------------------1
let userName = Dmitry;

function printUserName(userName) {
  console.log(`Привет, ${userName}!`);
}
printUserName(userName);
//-------------------------------------------2
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

let age = prompt("Сколько вам лет?", 18);

if (checkAge(age)) {
  console.log("Ура, вы совершеннолетний");
} else {
  console.log("Тебе бы подрости, дружок");
}

//------------------------------------------3

function welcomeClient(status) {
  let discount = 0;

  if (status === "бронза") {
    discount = 10;
  } else if (status === "серебро") {
    discount = 15;
  } else if (status === "золото") {
    discount = 20;
  } 

  console.log(
    `Приветствуем вас! Ваш статус: ${status} и ваша скидка составляет: ${discount}%`
  );
  return status;
}
welcomeClient(prompt("Введите ваш статус (бронза, серебро, золото):"));
