// 4. Напишіть функцію, яка отримує масив рядків і 
// повертає новий масив, в якому кожна рядків складається 
// з першої та останньої букви відповідної строки вхідного масиву.

const users = [
    "Ira",
    "Matvii",
    "Nastia",
]

const getLetter = users.map((user) => {
    const lastIndex = user.length -1
    return user.charAt(0) + user.charAt(lastIndex)
})

console.log(getLetter)
