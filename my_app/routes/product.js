var express = require("express");
var router = express.Router();
const productController = require('../controllers/productController')

// Ruta para detalle del producto
router.get ('/id/:id', productController.product)

// Ruta para añadir un producto
router.get('/add', productController.productAdd)

// Ruta para buscar producto
router.get('/searchResults', productController.searchResults)


module.exports = router