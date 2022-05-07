const {Router} = require('express')
const router = Router()
const books = require('../books-data')

router.get('/', (req,res) => {
    res.render('home.hbs',  {
        title: 'Home'
    })
})
router.get('/about', (req,res) => {
    res.render('about', {
        title: 'About'
    })
})

router.get('/books', (req,res) => {
    res.render('books', {
        title: 'Books',
        books
    })
})

module.exports = router