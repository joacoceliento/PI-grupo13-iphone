module.exports  = function (sequelize, dataTypes) {
    
    let alias = "Product";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED,
        },
        user_id:{
            type: dataTypes.INTEGER.UNSIGNED,
        },
        imagen:{
            type: dataTypes.STRING(500),
            // preguntar por NOT NULL
        },
        nombre_producto:{
            type: dataTypes.STRING(500),
            // preguntar por NOT NULL
        },
        descripcion:{
            type: dataTypes.STRING(500),
        },
        createdAt : {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt:{
            type: dataTypes.DATE,
        },
    }

    let config = {
        tableName: "productos",
        timestamps: false,
        underscored: true
    }

    let Product = sequelize.define('Product', cols, config);

    Product.associate = function (models) {
        
        Product.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id",
        })
        Product.hasMany(models.Comentario, {
            as: "comentario",
            foreignKey: "producto_id",
        })
    }

    return Product;

}