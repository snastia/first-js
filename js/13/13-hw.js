// 1

const btnEl = document.querySelector(".btn")
console.log(btnEl)

btnEl.addEventListener("click", (event) => {
   if (event) {
    btnEl.classList.add("new-class")
   } else {
    console.log("404")
   }
})

// 2

const btnSecondEl = document.querySelector(".second-button")
console.log(btnSecondEl)

btnSecondEl.addEventListener("click", (event) => {
    alert("Hello world!")
})

// 3

const form = document.querySelector("form");

const passwordEl = prompt("введіть пароль");


form.addEventListener("submit", (event) => {
    console.log(event);
    const username = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
  if (password === passwordEl) {
    alert(`Вітаю ${username} Ви успішно зареєстровані`);
  } else {
    alert("неправильний пароль");
  }
});