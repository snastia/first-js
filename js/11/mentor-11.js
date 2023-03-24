// const user = {
//     name: "Emily",
//     age: 32,
//     city: "Los Angeles",
//     occupation: "Marketing Manager"
//   }

//   const articleEl = document.querySelector("article")
//   articleEl.classList.add("article")

//   const title = document.querySelector("h1")
//   title.textContent = user.name
//   title.classList.add("title")

//   const age = document.querySelector("h1 + p")
//   age.textContent = user.age

//   const city = document.querySelector("a")
//   city.textContent = user.city
//   city.classList.add("link")

//   const occupation = document.querySelector("a + p")
//   occupation.textContent = user.occupation


const users = [
    {
      name: "John",
      age: 25,
      city: "New York",
      occupation: "Software Engineer"
    },
    {
      name: "Emily",
      age: 32,
      city: "Los Angeles",
      occupation: "Marketing Manager"
    }
]

const createMarkUp = function(users) {
    return users.map((user) => {
    const articleEl = document.querySelector("article")
    articleEl.classList.add("article")
  
    const title = document.querySelector("h1")
    title.textContent = user.name
    title.classList.add("title")
  
    const age = document.querySelector("h1 + p")
    age.textContent = user.age
  
    const city = document.querySelector("a")
    city.textContent = user.city
    city.classList.add("link")
  
    const occupation = document.querySelector("a + p")
    occupation.textContent = user.occupation
})
}

console.log(createMarkUp(users))