// 1

for(let i = 1; i <= 5; i += 1){
    console.log(i);
}

// 2

const min = 1;
const max = 10;

for(let i = 1; i <= 10; i += 1){
      if(i % 2 === 0){
    alert("Число парне");
  }
  if(i % 2 !== 0){
    alert("Число непарне");
  }
}

// 3

let num = 20;

while (num <= 28) {
  console.log(num);
  num += 1;
}

// 4

let heroName = "";
while(heroName.length <= 5){
    console.log(heroName);
    heroName = prompt("Введіть ім'я героя");
}
