const express = require('express')
const books = require('./books')
const logger = require('./middlewares/logger.js')

const app = express()

app.use(logger)

app.get('/', (req, res) => {
    res.send('salom')
})

app.get('/api/books', (req, res) => {
    res.json(books)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Running Server : ${PORT}`)
})