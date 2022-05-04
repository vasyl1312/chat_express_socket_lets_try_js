const socket = io()
const message = document.querySelector('.message')
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const nameBlock = document.querySelector('.name')

const userName = prompt('Please enter your name:')
nameBlock.innerHTML = `${userName}`

form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (input.value) {
    socket.emit('chat message', { message: input.value, name: userName })
  }
  input.value = ''
})

socket.on('chat message', (data) => {
  const item = document.createElement('li')
  item.innerHTML = `<span>${data.name}: ${data.message}</span>`
  message.appendChild(item)
  window.scrollTo(0, document.body.scrollHeight)
})
