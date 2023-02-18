// об'єкти

// як створюється. об'єкт - це опис однієї сутності
// властивості: ключ і значення.

// const obj1 = {
  
// }

// ім'я (між кожною властивістю кома, навіть
//  у останньої властивості), кількість, назва елементів
// (назва учнів наприклад, У МАСИВІ)



// const class1 = {
//   name: "10-А",
//   studentCount: 4,
//   students: ["Vlad", "Fedir", "Nastia", "Matvii"],
// }



// console.log(class1.name);


// якщо перезаписати властивість:

// class1.name = "10-Б";

// console.log(class1.name);

// console.log(class1);


// якщо хочемо нову властивість:

// class1.rating = 10;

// console.log(class1);

// якщо нове ім'я хочемо:

// class1.students.push("Yelisey");



// const playlist = {
//     name: 'Плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],

//     getName() {
//       console.log(this.name);
//     },

//     changeName(newName){
//      return this.name = newName;
//     },
//     getTracksLenght(){
//         return this.tracks.length;
//     },
//     addNewTrack(newTrack){
//         this.tracks.push(newTrack);
//     }
// }
// playlist.addNewTrack("трек-4");
// console.log(playlist.tracks);
// console.log(playlist.getTracksLenght());



// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// const allKeys = Object.keys(feedback);
// console.log(allKeys);

// for (const key of allKeys) {
//     console.log(feedback[key]);
// }





//   const findFriendByName = function(allFriends, NameToFind){
//     for (const friend of allFriends) {
//         if(friend.name === NameToFind){
//           console.log("Ви знайшли друга");
//           return NameToFind;
//         } else {
//             console.log("Такого друга не існує");
//         }
//     }
//   }

//   console.log(findFriendByName(friends, 'Poly'));
//   console.log(findFriendByName(friends, 'Chelsy'));



// Отримуємо імена всіх друзів

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];

// const getAllNames = function(allFriends){
//   const allNames = [];
//   for (const friend of allFriends) {
//     allNames.push(friend.name);
//   }
//   return allNames;
// }

// console.log(getAllNames(friends));