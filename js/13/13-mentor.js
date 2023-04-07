const formEl = document.querySelector("form")
const olEl = document.querySelector(".list")
const inputEl = document.querySelector(".input")
const buttonEl = document.querySelector(".button")

inputEl.name = "text"

formEl.addEventListener("submit", (event) => {
    event.preventDefault()
  const itemEl = document.createElement("li")
  itemEl.textContent = event.currentTarget.elements.text.value

  olEl.append(itemEl)
 console.log(olEl)
})