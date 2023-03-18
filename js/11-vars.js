// об'єкт window та document 

// console.log(window) // ?

// console.log(document)
// // це наша розмітка, але в консолі(document)

// console.log(document.querySelector())
// отримуємо елемент через клас-селектор

const navListEl = document.querySelector(".site-nav") 
console.log(navListEl);
// console.dir(navListEl)

const itemEl = document.querySelector(".site-nav__item")
console.log(itemEl)

// обов'язково повинен бути рядок, а в ньому селектор

const titleEl = document.querySelector(".title") // після selector, якщо хочеш всі елементи, можна 
// написати All (querySelectorAll())
console.log(titleEl)

// атрибути

// console.log(властивість.getAttribute(звертаємося до чогось, "src"))

const imageEl = document.querySelector(".image")
imageEl.src = "https://images.pexels.com/photos/15954328/pexels-photo-15954328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
imageEl.alt = "чоловік"

console.log(imageEl)

// замінюємо картинку

imageEl.src = "https://images.pexels.com/photos/2968788/pexels-photo-2968788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

// кінець

// const textEl = document.querySelector(".text")
// textEl.textContent = "hey"


// const ListEl = document.querySelector(".site-nav")
// console.log(ListEl.classList)

// const linkEl = document.querySelector(".site-nav__link")
// linkEl.classList.add("site-nav__link--current") // додає
// linkEl.classList.remove("site-nav__link--current") // видаляє ?
// linkEl.classList.toggle("site-nav__link--current") // ?
// linkEl.classList.replace("site-nav__link, site-nav__link--current") // перший аргумент - клас який 
// вже є, другий - на який хочемо змінити 
// console.log(linkEl.classList.contains("site-nav__link")) // буль, true або false, з if !!!!!,
// нижче приклад

// 1. отримати посилання на заголовок, текст і елементів списку

// 2. Отримати текст заголовка та змінити його

// 3. Перевірити чи є в абзаці класс, якщо є то замінити його на "text"

// 4. Додати до другого елементу списку клас 'active'. Клас 'active' 
// створити окремо в css та збільшити розмір тексту та кольор

// 1

const tittleEl = document.querySelector(".section-title")
console.log(titleEl)
const textEl = document.querySelector(".paragraph")
console.log(textEl)
const elementEl = document.querySelector(".list-item")
console.log(elementEl)

// 2

const generalEl = document.querySelector(".section-title")
generalEl.textContent = "Підрозділ 1"

// 3

if (textEl.classList.contains("paragraph")){
    textEl.classList.replace("paragraph", "text")
}

// 4

const listEl = document.querySelectorAll(".list-item")
listEl[1].classList.add("active")