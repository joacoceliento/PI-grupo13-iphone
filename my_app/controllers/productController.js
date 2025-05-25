const db = require('../database/models'); // para requerir la base de datos de sql


const info = require('../db/info');

let productController = {
    
    product: function (req, res) {
        let idPedido= req.params.id; 
        db.Product.findByPk(idPedido, {       
            
            include: [
                {association: "user"},
                {association: "comentario",
                    include: [
                        {association: "user"}
                    ]
                }
            ]
            
        })
        .then(function (producto) {
            if (producto) {
                res.render('product', { producto: producto }); 
            } else {
                res.send("Producto no encontrado");
            }
        })
        .catch(function (error) {
            console.error("Error en productController:", error);
            res.send("Error al cargar productos.");
        })
    },
        

        /*let idPedido= req.params.id;
        let infoProducto = info.productos
        let obJ = false // Esto nos sirve para cuando tengamos que hacer el return
                        

        for (let i = 0; i < infoProducto.length; i++) {
            const idProducto = infoProducto[i].id;

            if (idPedido == idProducto) {
                obJ = {
                    nombre: infoProducto[i].nombreProducto,
                    descripcion: infoProducto[i].descripcion,
                    comentarios: infoProducto[i].comentarios,
                    imagen: infoProducto[i].imagenProducto
                }}
        }

        res.render('product', { producto: obJ } )*/

   

    productAdd: function (req, res) {
        let usuario = info.usuario;
        res.render('productAdd', { usuario: usuario })
    },

    searchResults: function (req, res) {
        let productos = info.productos;
        res.render('searchResults', { productos: productos })
    }
    
}

module.exports = productController