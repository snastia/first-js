// 1

const user = {
    userName: "Настя",
    age: 13,
    showUserName() {
        console.log(this.userName);
    },
    updateAge(newAge) {
      console.log(newAge);
    }
}

user.showUserName();
user.updateAge(14);

// 2

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum;

sum = 100 + 160 + 130;
console.log(sum);

// 3

const calculator = {
    a: null,
    b: null,
    read(a, b) {
    
      this.a = prompt("Введіть перше числове значення");
  
      this.b = prompt("Введіть друге числове значення");
      
      console.log(this.a, this.b);
    },
  a: null,
  b: null,
  sum() {
  const sum = Math.pow(this.a + this.b);
  console.log(this.a + this.b);
  },
  a: null,
  b: null,
  mult() {
    const mult = Math.pow(this.a * this.b);
    console.log(this.a * this.b);
  }
}

calculator.read();
calculator.sum();
calculator.mult();

// 4

const cafe = {
    name: "Republic",
    width: 200,
    height: 300,
    personal: 5,
    hr: true 
}

const entries = Object.entries(cafe);
console.log(entries);

const mult2 = Math.pow((200 + 300) * 2);
console.log((200 + 300) * 2);