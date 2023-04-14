// 7

const fontsizeControlEl = document.getElementById('font-size-control')
const textEl = document.getElementById('text')

      fontsizeControlEl.addEventListener('input', (event) => {
        const fontSize = event.target.value + 'px'
        text.style.fontSize = fontSize
      })
