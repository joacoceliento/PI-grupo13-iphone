module.exports  = function (sequelize, dataTypes) {
    
    let alias = "User";
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER.UNSIGNED,
        },
        nombre:{
            type: dataTypes.STRING(500),
        },
        mail:{
            type: dataTypes.STRING(500),
            unique: true,
        },
        dni:{
            type: dataTypes.INTEGER.UNSIGNED,
            unique: true,
        },
        fecha_nacimiento:{
            type: dataTypes.DATE,
            // preguntar por NOT NULL
        },
        foto_url: {
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
        contrasenia: {
            type: dataTypes.STRING(500),
        },
    }

    let config = {
        tableName: "user",
        timestamps: false,
        underscored: true
    }

    let User = sequelize.define('User', cols, config);

    User.associate = function (models) {

        User.hasMany( models.Product , {
            as: "product",
            foreignKey: "user_id",
        })
        User.hasMany( models.Comentario , {
            as: "comentario", //va con "s" comentarios? cual es la diferencia de si es plural o singular
            foreignKey: "user_id",
        })
    }

    return User;

}