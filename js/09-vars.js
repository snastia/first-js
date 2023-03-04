// numbers.method(function(number) {})


//   const playerIdToUpdate = 'player-3';

// players.map((player) => {
//     if (playerIdToUpdate === player.id) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed += 100
//         }
//     }
// })


const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(number =>{
//     return number > 10
// })

// console.log(filteredNumbers)

// отримуємо масив всіх гравців які онлайн

// const onlinePlayers = players.filter(player => {
//     return player.online
// }).map(onlinePlayer => {return onlinePlayer.name})

// console.log(onlinePlayers)

// отримуємо масив всіх гравців які офлайн

// const offlinePlayers = players.filter(player => {
//     return !player.online;
// });

// console.log(offlinePlayers)

// Отримуємо масив всіх хардкорних гравців з часом більше 250

// const hardcorePlayers = players.filter((player) => {
//   return player.timePlayed >= 250
// })

// console.log(hardcorePlayers);


// метод find

// const number = numbers.find((number) => {
//     return number === 15;
// })

// console.log(number);



const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
  ]

// const findPlayerById = players.find((player) => {
//     return player.id === 'player-1'
// })

// console.log(findPlayerById)

// const findPlayerById = function(allPlayers, playerId) {
//   return allPlayers.find((player) => {return player.id === playerId})
// }



// console.log(findPlayerById(players, 'player-1'));
// console.log(findPlayerById(players, 'player-4'));


// Шукаємо гравця по імені

// const playerWithName = players.find((player) => {
//     return player.name === "Kiwi"
// })

// console.log(playerWithName)


// метод every

const anyHardcorePlayers = players.every((player) => {
  return player.timePlayed > 100
})

console.log(anyHardcorePlayers)

// метод some

const isAnyOnline = players.some((player) => {
    return player.online
})

console.log(isAnyOnline)

// метод reduce

// const total = numbers.reduce((acc, number) => {
//  return acc += number;
// }, 0)

// console.log("total: ", total)  // 75


/*
 * Рахуємо загальну зп
 */

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 150,
//   }

//   const salaryArray = Object.values(salary)
//   console.log(salaryArray)

//   const total = salaryArray.reduce((tt, salary) => {
//     console.log(`${tt} + ${salary}`)
//    return tt += salary
//   }, 0)
  
//   console.log(total)