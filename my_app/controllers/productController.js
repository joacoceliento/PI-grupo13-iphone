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
        })
    },

    comentarioAdd: function (req, res) {

        let comentarioNuevo = req.body.comentarioNUEVO;
        let idProducto = req.params.id; 

        db.Comentario.create({
            user_id: req.session.usuarioLogueado.id,
            producto_id: idProducto,
            descripcion: comentarioNuevo
        })
        .then(function (comentario) {
            return res.redirect(`/product/id/${idProducto}`)
        })
        .catch(function (error) {
            console.error("Error al crear producto:", error);
        });
        
    },
     
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
        console.log("req.body:", req.body);
        console.log("req.session.usuarioLogueado:", req.session.usuarioLogueado);
 
        let productoNuevo = {
           
            imagen: req.body.imagen,
            nombre: req.body.nombreProducto,
            descripcion: req.body.descripcion
 
        }
        db.Product.create({
            imagen: productoNuevo.imagen,
            nombre_producto: productoNuevo.nombre,
            descripcion: productoNuevo.descripcion,
            user_id: req.session.usuarioLogueado.id,
        })
        .then(function (productos) {
            return res.redirect('/index')
        })
        .catch(function (error) {
            console.error("Error al crear producto:", error);
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
        .catch(function (error) {
            console.error("Error al buscar el producto:", error);
        });
    },

}

module.exports = productController