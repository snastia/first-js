// 1

const max = 99;
const min = 55;
const number  = prompt("чи попадає ваше число у діапазон з 55 до 99?")
let message;
if(number > 55 && number < 99){
  message = prompt("Число потрапляє у діапазон");
} else{
  message = prompt("Число не потрапляє у діапазон");
}

// 2

const first = 0-16;
const second = 17-60;
const third = 61-100;
const Maksim = 55;
if(Maksim && second){
  alert("Ви у дорослій віковій групі");
} else{
    alert("Error");
}

// 3

const fullName = "Скрицька Анастасія";
if(fullName.length){
  alert(fullName.length);
} else{
    alert("УПС");
}

// 4

const max = 5;
const min = 1;

const random = Math.random(1, 5);
const mistake = "Error";
if(random){
    console.log(random);
} else{
    console.log(mistake);
}

// 5

let lang = "";
const  number = 3;

switch (number) {
   case 1:
    lang = "Janvier";
    console.log(lang);
    break;

    case 2:
        lang = "January";
        console.log(lang);
        break;
               case 3:
              lang = "Січень";
              console.log(lang);
              break;

        case 4:
            lang = "Январь";
            console.log(lang);
            break;

            default:
             console.log("Такої країни або такого місяця не існує");
             break;
}
            