// 1

const Arr1 = [1, 5, "4", "hello"];
const Arr2 = [true, 2, {}, ["a"], 222];

console.log(Arr1[1]);
console.log(Arr2[1]);

const res = Math.pow(Arr1[1], Arr2[1]);
const res2 = Arr1[1] + Arr2[1];
console.log(res2);

// 2

const newNumber = 22;
Arr1.splice(4, 0, newNumber);
console.log(Arr1);

// 3

for (const Arr of Arr2) {
    console.log(Arr);
}

// 4

const message = "Welcome to Ukraine!";

console.log(message.split(""));

console.log(message.indexOf("l"));

console.log(message.split(" "));

// 5

const styles = ["Джаз", "Блюз"];
const newWord = "Рок-н-рол";
styles.splice(2, 0, newWord);
console.log(styles);


const classic = "Класика";
const idx = styles.indexOf(classic);

styles.splice(idx, 1, classic);
console.log(styles);
