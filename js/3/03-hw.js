// 1

const max1 = 99;
const min2 = 55;
const number1  = prompt("чи попадає ваше число у діапазон з 55 до 99?")
let message;
if(number1 > 55 && number1 < 99){
  message = prompt("Число потрапляє у діапазон");
} else{
  message = prompt("Число не потрапляє у діапазон");
}

// 2

const first = 0-16;
const second = 17-60;
const third = 61-100;
const Maksim = 55;
if(Maksim > 0 && Maksim < 16){ 
  alert("Ви у дитячій віковій групі");
} else if(Maksim > 17 && Maksim < 60){
  alert("Ви у дорослій віковій групі");
} else if(Maksim > 61 && Maksim < 100){
 alert("Ви у групі пенсіонерів");
} else{
    alert("Error");
}

// 3

const surname = "Скрицька";
const MyName = "Анастасія";
if(surname.length){
  alert(surname.length);
} else if(MyName.length){
 alert(MyName.length);
} else{
    alert("УПС");
}
alert(surname.length + MyName.length);

// 4

const max = 5;
const min = 1;

const random = Math.random(1, 5);
if(random === 1){
    console.log(random);
} else if(random === 2){
  console.log(random);
} else if(random === 3){
    console.log(random);
} else if(random === 4){
  console.log(random);
} else if(random === 5){
  console.log(random);
} else{
    alert("mistake");
}

// 5

let lang = "";
const number = "ua";

switch (number) {
   case "fr":
    lang = "Janvier";
    console.log(lang);
    break;

    case "en":
        lang = "January";
        console.log(lang);
        break;
               case "ua":
              lang = "Січень";
              console.log(lang);
              break;

        case "ru":
            lang = "Январь";
            console.log(lang);
            break;

            default:
             console.log("Такої країни або такого місяця не існує");
             break;
}
            