const express = require('express')
const path = require('path')
const logger = require('./middlewares/logger')

const app = express()

app.use(logger)
app.use('/api/books', require('./routes/books'))

app.get('/', (req,res) => {
    res.send('Hello !!!')
})


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Running Server: ${PORT}`)
})
