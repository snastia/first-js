const num = 5;
// console.log(num);

// літерал звичайний

// Number

let elementalWidth = "50px";
Number.parseInt(elementalWidth);
// console.log(elementalWidth);

let elementalHeight = "50.12px";
const res = Number.parseFloat(elementalHeight);
// console.log(res);

// флоат також враховує крапку, а парсе інт - ні

let salary = 1300.16472;
// console.log(salary.toFixed(2));

// у фіол дужках пишу скільки я хочу бачити цифр після крапки, фіол - (2)


// const res1 = Number(salary.toFixed(2));
// console.log(res);
const base = 2;
const power = 5;

const res2 = Math.pow(base, power);
const res1 = base ** power;

// console.log(res2);
// зведення до степеню

 /*
 * Напиши скрипт який просить у користувача ввести число і степінь,
* підводить число в цю степінь і виводить результат в консоль.
*/
// const num1 = prompt("число");
// const powe = prompt("Степінь");
// console.log(Math.pow(num1, powe));
const max = 10;
const min = 5;
const random = Math.random() * (max - min) + min;

// console.log(Math.round(random));

// формула задання від одного числа до другого від " * "

// стрінг
const message1 = "В цьому рядку 26 символів.";
// console.log(message1.length);

// console.log ("5" + 5);  
// 55

// console.log(5 + 5);
// 10


/*
 * Напиши скрипт який виведе рядок в форматі:
 * «Гість x y поселяється в g номер q»,
 * підставив замість x y g q значення змінних
 */

const firstName = 'Mango';
const lastName = 'Lee';
const room = 716;
const type = 'VIP';
// const customersMsg = `Гість ${quantity} ${lastName} поселяється в ${room} номер ${type}`;
// console.log(customersMsg);
// const userData = "Гість " + firstName + " "+lastName+" поселяється в " +room+" номер "+ type ;

// console.log(userData);

// шаблонний рядок

const quantity = 15;
const orderMsg = `Ви замовляєте ${quantity} тістечок.`;
// console.log(orderMsg);

// логічні оператори ( логічне І, логічне АБО, логічне НІ), логічне І запинаяється на брехні,
// а логічне АБО - на правді? символ І - &&, символ АБО - ||. 


