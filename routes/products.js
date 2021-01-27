const express = require ('express')
const model = require ('../model/products')

const router = express.Router()

router.get('/', function(req, res) {
    res.render('products', {
        title: 'Página de produtos legalsíssima',
        products: model.getProducts()
    })
})

module.exports = router

