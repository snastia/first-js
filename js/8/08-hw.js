// 1

const players = [

    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  
  ];
  
  
  const playerIdToUpdate = 'player-3';

  const updatedPlayers = players.map(player => {
    if (playerIdToUpdate === player.id) {
      return {
        ...player,
        timePlayed: player.timePlayed + 100,
      };
    }
  
    return player;
  });

   console.log(updatedPlayers);

// 2
  
// { name: C, price: 50 }

//  name: '🍇', price: 70 

// { name: '🍋', price: 60 }

// { name: '🍓', price: 110 }


// * { name: '🍎', price: 50 }
// * { name: '🍇', price: 70 }
// * { name: '🍋', price: 60 }
// * { name: '🍓', price: 110 }
// */

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
     this.items.push(newProduct)
   },
   remove(productName) {
    let len = 0
    for(const sigm of this.items){
        if(this.items[len].name === productName){
            if(this.items[len].quantity > 1){
                this.items[len].quantity--
                return
            }else{
                this.items.splice(len,len +1)
                return
            }
        }
        len++
    }
  },

   clear() {
    this.items = [];
   },

   countTotalPrice() {
    let total = 0
    for(const sig of this.items){
        total+=sig.price
    }
    console.log(total)
   },

   increaseQuantity(productName) {
    let len = 0
    for(const incr of this.items){
        if(this.items[len].name === productName){
            this.items[len].quantity++
            return
        }
        len++
    }
   },

   decreaseQuantity(productName) {
    let lent = 0
        for(const incr of this.items){
            if(this.items[lent].name === productName){
                this.items[lent].quantity--
                return
            }
            lent++
        }
   },
 };
 

 // console.table(cart.getItems());
 
 cart.add({ name: '🍎', price: 50 });
 cart.add({ name: '🍋', price: 60 });
 cart.add({ name: '🍋', price: 60 });
 cart.add({ name: '🍓', price: 110 });
 cart.add({ name: '🍋', price: 60 });
  
 console.log(cart.items);
 
 cart.remove('🍎');