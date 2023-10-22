const {DataTypes} = require("sequelize");

module.exports = (bdPokemon)=>{

    bdPokemon.define("type",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    },{"timestamps": false })
}

