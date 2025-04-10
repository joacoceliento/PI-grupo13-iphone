const info = require('../db/info')

let productController = {
    
    product: function (req, res) {
        let idPedido= req.params.id;
        let infoProducto = info.productos
        let obJ = false // Esto nos sirve para cuando tengamos que hacer el return
                        // 

        for (let i = 0; i < infoProducto.length; i++) {
            const idProducto = infoProducto[i].id;

            if (idPedido == idProducto) {
                obJ = {
                    nombre: infoProducto.nombreProducto[i],
                    descripcion: infoProducto.descripcion[i],
                    comentarios: infoProducto.comentarios[i] 
                }}
        }

        res.render('product', { obJ } )

    },

    productAdd: function (req, res) {
        res.render('productAdd')
    },

    searchResults: function (req, res) {
        let productos = info.productos;
        res.render('searchResults', { productos: productos })
    }
    
}

module.exports = productController