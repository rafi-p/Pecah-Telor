  const express = require('express')

  const cors = require('cors')
  const app = express()
  const PORT = 3000
  const http = require('http').createServer(app)

  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  io.on('connection', (socket) => {
      console.log('a user connected')
  })

  http.listen(PORT, () => {
    console.log(`Telor Pecah app listening at http://localhost:${PORT}`)
  })