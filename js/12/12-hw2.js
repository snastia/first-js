const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
  ];


  const ingredient = ingredients.map((element) => {
    const itemsEl = document.createElement("li")
    itemsEl.textContent = element
    return itemsEl
  })
  console.log(ingredient)

  const listEl = document.querySelector("#ingredients")
  console.log(listEl)

  listEl.append(...ingredient)