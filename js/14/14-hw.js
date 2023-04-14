// 5

const nameInputEl = document.getElementById('name-input')
const nameOutputEl = document.getElementById('name-output')

nameInputEl.addEventListener('input', (event) => {
  const inputText = event.target.value.trim()
  nameOutputEl.textContent = inputText !== '' ? inputText : 'незнайомець'
})
