// 1

let k1 = "5px";
Number.parseInt("5px");

let k2 = "12djd334";
Number.parseInt("12djd334");

let k3 = "12.45asdwe";
Number.parseInt("12.45asdwe");

let k4 = "qwqweeewq";
Number.parseInt("qwqweeewq");

// 2

k1 = "5px";
Number.parseFloat("5px");

k2 = "12djd334";
Number.parseFloat("12djd334");

k3 = "12.45asdwe";
Number.parseFloat("12.45asdwe");

k4 = "qwqweeewq";
Number.parseFloat("qwqweeewq");

// 3

console.log(Math.min(2, 34, 99, 3, 22, 36, 733, 18));
console.log(Math.max(2, 34, 99, 3, 22, 36, 733, 18));

// 4

const max = 19;
const min = 3;

const random = Math.random() * (max - min) + min;


