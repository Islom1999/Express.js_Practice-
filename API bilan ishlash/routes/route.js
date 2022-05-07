const {Router} = require('express')
const books = require('../books-data')

const router = Router()

router.get('/', (req,res) => {
    res.send(books)
})

router.get('/:id', (req,res) => {
    const isExist = books.some(book => book.id === +req.params.id)
    if(isExist){
        res.json(books.find(item => item.id === +req.params.id))
    }else{
        res.status(404).json({massage: `siz so'ragan ${req.params.id} idlik kitob topilmadi`})
    }

})

module.exports = router