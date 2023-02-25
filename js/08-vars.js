// метод concat()

// const numbers1 = [1, 2, 3, 54, 12];
// const numbers2 = [5, 65, 32, 14];

// const numbers = numbers1.concat(numbers2);
// console.log(numbers);



// операція ...spread

// const numbers1 = [1, 2, 3, 54, 12];
// const numbers2 = [5, 65, 32, 14];

// const numbers = [...numbers1, ...numbers2];
// console.log(numbers);



// const lastWeekTemps = [1, 2, 3];
//   const currentTemps = [4, 5, 6];
//   const nextWeekTemps = [7, 8, 9];

//   const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps);
//   console.log(allTemps);

//   const allTemps1 = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
//   console.log(allTemps1);




// const a = { x: 1, y: 2 };
// const b = { x: 0, a: 3 };

// // const c = Object.assign({}, a, b);

// const c = {
//     ...a,
//     ...b,
// }

// console.log(c);




const cart = {
    items: [],
    getItems() {},
    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
              item.quantity += 1;
              return;
            } 
        }
         const newProduct = {
            ...product,
            quantity: 1,
         }

        this.items.push(newProduct);
    },
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
  };



// * { name: '🍎', price: 50 }
// * { name: '🍇', price: 70 }
// * { name: '🍋', price: 60 }
// * { name: '🍓', price: 110 }


cart.add({ name: '🍎', price: 50 }); 
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });

console.log(cart.items);