// події

// const targetBtn = document.querySelector(".js-target-btn")
// const addListenerBtn = document.querySelector(".js-add-listener")
// const removeListenerBtn = document.querySelector(".js-remove-listener")

// перший аргумент - те, що хочемо знати від користувача
// друга - функція (колбек)
// щоб отримати це в консолі, треба нажати на щось*
// targetBtn.addEventListener("click", () => {
//     console.log("відбулась подія клік")
// })



// addListenerBtn.addEventListener("click", () => {
//     console.log("додаю користувача на цільову кнопку")

//     targetBtn.addEventListener("click", onClick)
// })

// removeListenerBtn.addEventListener("click", () => {
//     console.log("зняли слухача з цільової кнопки")
//     targetBtn.removeEventListener("click", onClick)
// })

// function onClick() {
//     console.log("відбулася подія клік")
// }

// зняли користувача зверху



// const form = document.querySelector(".js-register-form")

// form.addEventListener("submit", onFormSubmit)

// function onFormSubmit(event) {
//    event.preventDefault()
  
//    const formElements = event.currentTarget.elements
//    const emailValue =  formElements.email.value
//    const password = formElements.password.value
//    const subscription = formElements.subscription.value

//    const formData = {
//     emailValue,
//     password,
//     subscription,
//    }
//    console.log(formData)

//    отримуємо пароль, емеіл і тип підписки
// }



const backdrop = document.querySelector(".js-backdrop")
const openBtn = document.querySelector('[data-action="open-modal"]')
const closeBtn = document.querySelector('[data-action="close-modal"]')
const body = document.querySelector("body")

openBtn.addEventListener("click", () => {
    body.classList.add("show-modal")
})

closeBtn.addEventListener("click", onBtnClose)

function onBtnClose() {
  body.classList.remove("show-modal")
}

backdrop.addEventListener("click", onBackDrop)

function onBackDrop(event) {
    if (event.currentTarget === event.target) {
        onBtnClose()
    } 
}

// відкривається і закривається модалка, якщо нажимати по бекдропу