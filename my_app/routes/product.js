var express = require("express");
var router = express.Router();
const productController = require('../controllers/productController')


router.get ('/', productController.producto)

router.get('/add', productController.productAdd)


module.exports = router