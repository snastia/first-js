// події, продовження

// const inputEl = document.querySelector(".js-input")
// const checkboxLicenceEl = document.querySelector(".js-license")
// const buttonEl = document.querySelector(".js-button")
// const spanEl = buttonEl.querySelector("span")

// focus і blur


// inputEl.addEventListener("input", onInputChange)

// function onInputChange (e) {
//     console.log(e.currentTarget.value)

//     spanEl.textContent = e.currentTarget.value
    // коли пишемо в інпут, в кнопці вводиться те, що вписали 
    // в інпут
// }


// checkboxLicenceEl.addEventListener("change", onChexboxChange)

// function onChexboxChange(event) {
    // console.log(event.currentTarget.checked)
    // console.dir(buttonEl.disabled = false)

    // зробили так, якщо нажимаємо на прийняти договір
    // кнопка зареєструватися стає активною

    // buttonEl.disabled = !event.currentTarget.checked

    // і той, і той варіанти правильні(працюють)
// }




// function onFocusChange(event){
// console.log(event.currentTarget.value)
// }

// blur працює навпаки фокусу


const btnClearEl = document.querySelector(".js-clear")
const titleEl = document.querySelector(".js-output")


// keypress, keydown, keyup (keyup меньше всього зручна)
// keyup працює повільніше, після нажимання клавіши(прибрали палець)

window.addEventListener("keypress", onKeypress)

// keypress відслідковує не усі клавіши, а keydown - усі

function onKeypress(event) {
    console.log("event.code: ", event.code)
    console.log("event.key: ", event.key)
    
    titleEl.textContent += event.key

}

btnClearEl.addEventListener("click", () => {
    titleEl.textContent = ""
})

