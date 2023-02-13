// 1

const hello1 = function (){
  return "Привіт JavaScript";
}
console.log(hello1());

// 2

function hello2(name) {
    console.log(`Привіт, ${name}`);
}
hello2("Василь");

// 3

const mul = function(m, n) {
    console.log(m + n);
    console.log(m * n);
    console.log(m - n);
}

mul(345, 564);

// 4

const myNewArrowFunction = (...rest) => {
  console.log(rest);
}

myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

// 5

const myAverageScore = (arr) => {
   let totalScore = 0;

   for (let element of arr) {
    totalScore += element;
   }
   totalScore = totalScore / arr.length;

   if (totalScore <= 100 && totalScore >= 91){
     return "My average score is A";
   } else if (totalScore <= 90 && totalScore >= 81) {
    return "My average score is B";
   } else if (totalScore <= 80 && totalScore >= 71) {
    return "My average score is C";
   } else if (totalScore <= 70){
    return "My average score is D";
   }
}



console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));