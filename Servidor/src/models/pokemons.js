const {DataTypes} = require("sequelize")

module.exports = (dbPokemon)=>{
dbPokemon.define("pokemons",{
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagen:{
        type: DataTypes.STRING,
        allowNull: false,},
    vida:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ataque:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    defensa:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})
}