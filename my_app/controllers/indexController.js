// Cosas para preguntar 

/* 
    1 - Cuantos archivos de controllers y de rutas tengo que hacer por página?
            puedo juntarlas y ponerlas en menos carpetas?

    2 - El HEAD de cada página en view, debo ponerla en una carpeta partials como lo hice con footer?
            si hago eso, los links con el css y las imagenes, siguen funcionando?

*/


let indexController = {
    index : function (req, res) {
        res.render('index', { title: 'Mercado Libre Argentina' }); 
      }
};


module.exports = indexController;