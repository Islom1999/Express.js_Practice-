const express = require('express')
const {engine} = require('express-handlebars')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')

app.use('/', require('./routers/home'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(PORT)
})