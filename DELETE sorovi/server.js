const express = require("express");
const logger = require('./routes/logger')

const app = express()

// app.use(logger)

// serverga json malumot kelsa express o'qishi uchun chaqiriladigan funksiya
app.use(express.json())

// serverga form teglardan kelgan malumotlarni o'qish uchun chaqiriladigan funksiya
app.use(express.urlencoded({extended: false}))

app.use('/api/books',require('./routes/books'))

app.get('/', (req,res) => {
    res.send('Salom')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Running Server : ${PORT}`)
})