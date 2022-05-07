const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req,res) => {
    res.send('<h1>Hello World!!!</h1>')
})
app.get('/index', (req,res) => {
    let content = path.join(__dirname, 'public', 'index.html')
    res.sendFile(content)
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Running Server: ${PORT}`)
})