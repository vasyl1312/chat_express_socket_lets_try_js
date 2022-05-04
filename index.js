const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const PORT = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

http.listen(PORT, () => {
  console.log(`Server has started on ${PORT}`)
})
