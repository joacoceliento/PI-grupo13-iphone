const db = require('../database/models');
const index = db.index;

let info = require('../db/info')

let indexController = {

    index: function (req, res) {
        db.Product.findAll({
            include: [{association: "user"},
                    {association: "comentario"}]
        })
        .then(function (resultados) {
            res.render('index', {productos: resultados})
        })
    
    }
};


module.exports = indexController;