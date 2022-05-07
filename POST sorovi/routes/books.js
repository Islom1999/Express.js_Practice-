const {Router} = require('express')
const uuid = require('uuid')

const books = require("../books-data");

const router = Router()

router.get('/', (req, res) => {
    res.json(books)
})
router.get('/:id', (req,res) => {
    const id = req.params.id
    const isExit = books.some(book => book.id === id)
    if(isExit){
        res.json(books.find(book => book.id === id))
    }else{
        res.json({massage: `siz so'ragan ${id} idli kitob mavjud emas`})
    }
})
router.post('/', (req,res) => {
    const newBook = {
        id: uuid.v4(),
        name: req.body.name,
        author: req.body.author,
        pages: req.body.pages,
    }
    if(!req.body.name || !req.body.author || !req.body.pages){
        return res.status(400).json({massage: 'Iltimos malumotlarni to\'liq jo\'nating'})
    }
    books.push(newBook)
    res.json(books)
})

module.exports = router


