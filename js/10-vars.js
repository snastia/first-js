// const players = [
    // { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    // { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    // { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    // { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    // { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
//   ]

// const calculateTotalTime = players.reduce((totalTime, player) => {
//     return totalTime + player.timePlayed
// }, 0)  

// console.log(calculateTotalTime)


// Рахуємо загальну кількість товарів в кошику (ціну)

const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 120, quantity: 3 },
    { label: 'Lemons', price: 70, quantity: 4 },
  ];

const totalPrice = cart.reduce((price, product) => {
    return price += product.price * product.quantity
}, 0)

console.log(totalPrice)

// збираємо з всіх тегів один масив

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];

const allTags = tweets.reduce((tags, tweet) => {
    return [...tags, ...tweet.tags]
}, [])

console.log(allTags)

// зробити так, щоб масив який у консолі, там елементи 
// не повторювались

const tagStats = allTags.reduce((acc, tag) => {
   return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] += 1 : acc[tag] = 1
    }
}, {});

console.log(tagStats)


// метод sort()

const numbers = [1, 9, 6, 2, 3];
// numbers.reverse() (розвертає масив)
numbers.sort()
console.log(numbers)

const letters = ["b", "B", "a", "A"];
letters.sort()
console.log(letters)

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const time = [...players].sort((prevPlayer, nextPlayer) => {
    return prevPlayer.timePlayed - nextPlayer.timePlayed
})

console.log(time)



const arr = [
    { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 },
    { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
    { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
    { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
    { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 },
    { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 },
    { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 },
    { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 },
    { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 },
    { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 },
    { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 },
    { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 }
    ];

    // Настя -знайти суму років скільки прожили всі вченні

    // const allNumbers = arr.reduce((total, numbers) => {
       
    // }, 0)
    // console.log(allNumbers)