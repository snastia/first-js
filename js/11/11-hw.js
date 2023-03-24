// 1

const titleEl = document.querySelector(".page-title")
titleEl.textContent = "Новий заголовок"
console.log(titleEl)

// 2

const textEl = document.querySelector(".paragraph")
textEl.textContent = "риба"
console.log(textEl)

// 3

const listEl = document.querySelector(".list-item")
console.log(listEl)

// 4

const imageEl = document.querySelector(".image")
imageEl.src = "https://images.pexels.com/photos/7521210/pexels-photo-7521210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

// 5

const sectionTitleEl = document.querySelectorAll(".section-title")
console.log(sectionTitleEl)

const lastIndex = sectionTitleEl.length - 1

sectionTitleEl[lastIndex].textContent = "Новий заголовок"

// 6

const tableCellEl = document.querySelectorAll(".section-title")
console.log(tableCellEl)

const index = tableCellEl.length - 1

tableCellEl[index].textContent = "Оновлене значення"

// 7

const footerTextEl = document.querySelectorAll(".footer-text")
console.log(footerTextEl)

for (const El of footerTextEl) {
    El.classList.add("highlight")
}

// 8

const navEl = document.querySelector(".navigation")
console.log(navEl)