// Масиви

// це набір ОДНАКОВИХ даних
// літерал масиву = [];

// const array = [1, 2, 3, 4];
// console.log(array);



// Напиши скрипт пошуку логіна
//  * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
//  * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'

// const logins = ['m4ngoDoge', 'aj4xth3m4n', 'k1widab3st', 'poly1scute'];
// const loginToFind = 'aj4xth3m4n';
// let message;

// logins.includes(loginToFind);
// const result = logins.includes(loginToFind);
// console.log(result);
// if(result){
//  message = `Користувач ${loginToFind} знайдено.`;
// } else {
//   message = `Користувач ${loginToFind} не знайдено.`;
// }

// метод split - робить з масива частинки(головне в дужках додати щось)
// метод join - робить з масива рядок




// Повинно вийти top-10-benefits-of-react-framework

// const title = 'Top 10 benefits of React framework';
// const normalizeTitle = title.toLocaleLowerCase();

// const titleArr = normalizeTitle.split(" ");
// const titleJoin = titleArr.join("-");

// console.log(titleJoin);


// метод concat - "зшиває" цифри наприклад, може додати два масива,
// типу наприклад є 5 в одному масиві, а 10 в другому, то через цей метод буде "5, 10"

// метод splice - "швейцарський ніж", може робити майже все завгодно з масивом

// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5',
//   ]

  /*
   * Видалення (по індексу), метод indexOf()
   */
//   const cardToRemove  = 'Карточка-3';

//   const index = cards.indexOf(cardToRemove);
//   console.log(index);

//   cards.splice(index, 1);
//   console.log(cards);

  /*
   * Додавання (по індексу)
   */
  
const cardToInsert = 'Карточка-6';
cards.splice(6, 0, cardToInsert);
console.log(cards);

// або можна cards.push(cardToInsert);
// console.log(cards);


/*
   * Оновлення (по індексу)
   */

  const cardToUpdate = 'Карточка-4';
  const idx = cards.indexOf(cardToUpdate);

  cards.splice(idx, 1, cardToInsert);
  console.log(cards);