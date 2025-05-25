const db = require('../database/models');
const index = db.index;

let info = require('../db/info')

let indexController = {
    index: function (req, res) {
        let infoProducto = info.productos; // obteng de db
        
        res.render('index', { 
            productos: infoProducto // pasamos los productos a la vista
        });
    }
};


module.exports = indexController;