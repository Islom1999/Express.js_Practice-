const {Router} = require('express');
const uuid = require('uuid')

let books = require("../books-data");

const router = Router()

router.get('/', (req, res) => {
    res.json(books)
})
router.get('/:id', (req,res) => {
    const id = req.params.id
    const isExit = books.some(book => book.id == id)
    if(isExit){
        res.json(books.find(book => book.id == id))
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
router.put('/:id', (req,res) => {
    const isExist = books.some(book => book.id == req.params.id)
    const editBook = req.body

    if(isExist){
        books.forEach(book => {
            if(book.id == req.params.id){
                book.name = editBook.name ? editBook.name : book.name
                book.author = editBook.author ? editBook.author : book.author
                book.pages = editBook.pages ? editBook.pages : book.pages

                res.json({massage: `kitob malumotlari yangilandi`, book})
            }
        })
    }else{
        res.json({massage: `siz so'ragan ${req.params.id} idli kitob topilmadi`})
    }
})

router.delete('/:id', (req,res) => {
    const isExist = books.some(book => book.id == req.params.id)
    
    if(isExist){
        books = books.filter(book => book.id != req.params.id)
        res.json({massage: `siz so'ragan ${req.params.id} idli kitob o'chirildi`})
    }else{
        res.json({massage: `siz so'ragan ${req.params.id} idli kitob topilmadi`})
    }

})

module.exports = router


