// 8

const btnRenderEl = document.querySelector('[data-action="render"]')
const btnDestroyEl = document.querySelector('[data-action="destroy"]')
const inputEl = document.querySelector("input")
const boxEl = document.querySelector("#boxes")

btnRenderEl.addEventListener("click", onCreateClick)
btnDestroyEl.addEventListener("click", onClearClick)

function onCreateClick() {
    const inputValue = inputEl.value
    createBoxes(inputValue)
}


function createBoxes(amount) {
    let boxSize = 30;
    for(let i = 0; i < amount; i += 1){
        const newContainer = document.createElement("div")
        newContainer.style.width = boxSize + "px"
        newContainer.style.height = `${boxSize}px`

        let color = Math.round(Math.random()*65025).toString(16);
        newContainer.style.backgroundColor ='#' + color;
        boxEl.append(newContainer)
        boxSize += 10;
      }
}

function onClearClick(){
  boxEl.innerHTML = ""
}