const express = require ('express')
const model = require ('../model/products')

const router = express.Router()

router.get('/', function(req, res) {
    const types = [{
        id: 'electronic',
        label: 'Eletrônico'
    }, {
        id: 'food', 
        label: 'Alimentício'
    } , {
        id: 'drugs',
        label: 'Farmacêutico'
    }]
    res.render('products', {name: 'Pagina de Produtos', types: types})
})

module.exports = router

 