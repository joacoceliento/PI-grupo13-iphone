module.exports  = function (sequelize, dataTypes) {
    
    let alias = "Comentario";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED,
        },
        producto_id:{
            type: dataTypes.INTEGER.UNSIGNED,

        },
        user_id:{
            type: dataTypes.INTEGER.UNSIGNED,

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
        tableName: "comentarios",
        timestamps: false,
        // underscored: true
    }

    let Comentario = sequelize.define('Comentario', cols, config);

    Comentario.associate = function (models) {
        
        Comentario.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id",
        })
        Comentario.belongsTo(models.Product, {
            as: "product",
            foreignKey: "producto_id",
        })
    }

    return Comentario;

}