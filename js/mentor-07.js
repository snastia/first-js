// Напиши функцію logItems(array),
//  яка отримує масив і використовує цикл for, 
//  який для кожного елемента масиву буде 
//  виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1.
//  Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax']
//   з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.





/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i ++) {
//     console.log(`${i+1} - ${array[i]}`);
//   }
// };


// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);




// Напиши функцію findLongestWord(string),
//  яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини)
//   і повертає найдовше слово в цьому рядку.

// const findLongestWord = function(str) {
//     const words = str.split(" ");
//     let longestWord = words[0];
//     for (const element of words) {
//       if (element.length > longestWord.length){
//         longestWord = element;
//       }
//     }
//     return longestWord;
//   };
  

  /*
   * Виклич функції для перевірки працездатності твоєї реалізації.
   */

//   console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
//   console.log(findLongestWord('Google do a roll')); // 'Google'
  
//   console.log(findLongestWord('May the force be with you')); // 'force'



// Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

//   user.mood = "happy";
//   console.log(user);

//   user.hobby = "skydiving";

//   user.premium = false;

//   const key = Object.keys(user);
//   for (const element of key) {
//     console.log(`${element}: ${user[element]}`);
//   }



// Напиши функцію getAllPropValues(arr, prop),
//  яка отримує масив об'єктів і ім'я властивості.
//   Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроїд', price: 400, quantity: 7 },
//   { name: 'Захоплення', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//     const propValues = [];
//     for (const element of arr) {
//         console.log(element[prop]);
//         propValues.push(element[prop]);
//     }
//     return propValues;
//   };
  
  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */

//   console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
  
//   console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
  
//   console.log(getAllPropValues(products, 'category')); // []