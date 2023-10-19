const {DataTypes} = require("sequelize");

module.exports = (bdPokemon)=>{

    bdPokemon.define("type",{
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
}

