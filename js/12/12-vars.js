// console.log(document)
// const listEl = document.querySelector(".site-nav")
// // console.log(listEl)

// const itemsEl = listEl.querySelectorAll(".site-nav__item")
// можна listEl.children
// console.log(itemsEl)

// console.log(listEl.lastElementChild)


// const itemEl = document.querySelectorAll(".site-nav__item")
// console.log(itemEl)



// створювання елементів

// const containerEl = document.querySelector("body")
// const listEl = document.querySelector(".site-nav")

// const titleEl = document.createElement("h1")
// titleEl.textContent = "Привіт, це перший мій створений елемент!"
// titleEl.classList.add("title")
// titleEl.style.backgroundColor = "tomato"
// console.log(titleEl)

// document.body.appendChild(titleEl)
// // appendChild додає у кінець body
// document.body.insertBefore(titleEl, listEl)
// встає ДО елемента, який вказаний другим аргументом(listEl)



// const containerEl = document.querySelector(".hero")

// const imgEl = document.createElement("img")
// imgEl.src = "https://images.pexels.com/photos/11277097/pexels-photo-11277097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
// imgEl.alt = "картинка"
// imgEl.width = "200"
// containerEl.appendChild(imgEl)

// console.log(imgEl)

// const listEl = document.querySelector(".site-nav")

// const itemEl = document.createElement("li")
// itemEl.classList.add("site-nav__item")

// const linkEl = document.querySelector("a")
// linkEl.href = "";
// linkEl.classList.add("site-nav__link")
// linkEl.textContent = "Особистий кабінет"

// // console.log(linkEl)

// itemEl.appendChild(linkEl)
// console.log(itemEl)
// listEl.appendChild(itemEl)


// створювання декількох елементів

// listEl.append(itemEl, titleEl) // що першим поставиш, те і перше додасться
// listEl це те, куди хочемо додати елементи ( у ліст )



const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];

  const colorPickerContainerEl = document.querySelector(".js-color-picker")

const option = colorPickerOptions[0]

  

//   console.log(btnEl)

//   colorPickerContainerEl.appendChild(btnEl)

// const btnElems = colorPickerOptions.map((option) => {
//   const btnEl = document.createElement("button")
//   btnEl.classList.add("color-picker__option")
//   btnEl.textContent = option.label
//   btnEl.style.backgroundColor = option.color
//   btnEl.type = "button"

//   return btnEl
// })

// console.log(btnElems)

// colorPickerContainerEl.append(...btnElems)



// перероблюємо кнопки на функцію

const createBtnEl = function(options){
    const btnElems = options.map((option) => {
        const btnEl = document.createElement("button")
        btnEl.classList.add("color-picker__option")
        btnEl.textContent = option.label
        btnEl.style.backgroundColor = option.color
        btnEl.type = "button"
        return btnEl
})
return btnElems
}
const createBtnElements = createBtnEl(colorPickerOptions)
colorPickerContainerEl.append(...createBtnElements)

// const titleEl = document.querySelector(".title")
// console.log(titleEl.textContent)
// console.log(titleEl.innerHTML)

// titleEl.innerHTML = '<a href="" class="site-nav__link">Про нас</a>'

// const containerEl = document.querySelector(".js-container")

// containerEl.insertAdjacentHTML("beforeend", `<article class="product">
// <h2 class="product__name">Назва</h2>
// <p class="product__descr">Опис</p>
// <p product__pridct>Ціна: 1111 кредитів</p>
// </article>`)

const containerEl = document.querySelector(".site-nav")
containerEl.insertAdjacentHTML("beforebegin", `<li class="site-nav__item">
<a href="" class="site-nav__link">Про нас</a>
</li>`)
containerEl.insertAdjacentHTML("afterenda", `<li class="site-nav__item">
<a href="" class="site-nav__link">Кабінет</a>
</li>`)