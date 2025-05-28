const db = require('../database/models'); // para requerir la base de datos de sql
const op = db.Sequelize.Op; 

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
    AddGET: function (req, res) {
        db.Product.findAll({
            include: [
                {association: "user"},
                {association: "comentario",
                    include: [{association: "user"}]}
            ],
        })
        .then(function (usuario) {
            res.render('productAdd', { usuario: usuario })
        })
    },

    productAdd: function (req, res) {

        let productoNuevo = {
            
            imagen: req.body.imagen,
            nombre: req.body.nombreProducto,
            descripcion: req.body.descripcion

        }
        db.Product.create({
            imagen: productoNuevo.imagen,
            nombre_producto: productoNuevo.nombre,
            descripcion: productoNuevo.descripcion,
            user_id: 1,
        })
        .then(function (producto) {
            return res.redirect('/index')
        })
        .catch(function (error) {
            console.error("Error al crear producto:", error);
            res.status(500).send("Error al crear producto");
        });
    },


    searchResults: function (req, res) {
        
        let search = req.query.search; 

        db.Product.findAll({
            include: [
                {association: "user"},
                {association: "comentario",
                    include: [{association: "user"}]}
            ],
            where: [{ nombre_producto: { [op.like]: `%${search}%` }}]
        })
        .then(function (resultados) {
            if (resultados.length > 0){
                res.render('searchResults', { productos: resultados })
            }
            else{
                res.send('No hay resultados para su criterio de búsqueda')
            }
        })
        /*let productos = info.productos;*/
    }

}

module.exports = productController