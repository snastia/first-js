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
    read(a, b) {
         prompt("Введіть перше числове значення");
        a = (number);
          prompt("Введіть друге числове значення");
        b = (number);
        console.log(number);
    },
    sum() {
     
    },
    mult() {
     
    }
}

