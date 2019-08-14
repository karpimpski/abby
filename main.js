const button = document.querySelector('button')
const yes = document.querySelector('#yes')
const no = document.querySelector('#no')
const poem = document.querySelector('#poem')

let clicks = 0
let clickTimer

button.addEventListener('click', function() {
  yes.className = ''
  no.className = ''
  if (Math.random() >= 0.5) yes.className = 'active'
  else no.className = 'active'
})

yes.addEventListener('click', addClick)
no.addEventListener('click', addClick)

function addClick() {
  clicks++
  if (clicks >= 3) poem.className = 'active'
  clearTimeout(clickTimer)
  clickTimer = setTimeout(function() {
    clicks = 0
  }, 3000)
}