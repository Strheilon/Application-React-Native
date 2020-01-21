let express = require('express')
let router = express.Router()
let Product = require('./models/products')

router.get('/', (req,res) => {
    Product.find({}, (error,results) => {
        res.json(results) 
    })
})

router.post('/', (req,res) => { 
    let body = req.body
    let newProduct = new Product(body)
    newProduct.save((error) => {
        if (error)
            res.send(400, error)
        else 
            res.json(newProduct)
    })
})

router.get('/:users', (req,res) => { res.json(req.params.user) })
 
router.delete('/:users', (req,res) => { res.json(req.params.user) })

module.exports = router;
