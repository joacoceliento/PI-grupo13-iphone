
let productController = {
    
    product: function (req, res) {
        res.render('product')
    },

    productAdd: function (req, res) {
        res.render('productAdd')
    },

    searchResults: function (req, res) {
        res.render('searchResults')
    }
    
}

module.exports = productController