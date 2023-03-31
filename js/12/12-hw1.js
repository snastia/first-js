const categories = document.getElementById("categories")
console.log(`У списку ${categories.children.length} категорії`)

const items = categories.children

for (const item of items) {
  console.log(item.firstElementChild.textContent)
  console.log(item.lastElementChild.children.length)
}

