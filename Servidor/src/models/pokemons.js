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
        unique: true,
    },
    imagen:{
        type: DataTypes.STRING,
        },
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
},{"timestamps": false })
}

