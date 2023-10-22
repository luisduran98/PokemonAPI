const {type} = require("../db/db");
const axios = require("axios")
const postType = async(req,res) => {
try {
    const response = await axios.get("https://pokeapi.co/api/v2/type");
    const types = response.data.results;

    for (let i = 0; i < types.length; i++) {
        await type.create({ nombre: types[i].name });
    }

    res.status(200).json("Tipos de Pokémon insertados en la base de datos.");
} catch (error) {
    console.error(error);
    res.status(500).json("Hubo un error al insertar tipos de Pokémon en la base de datos.");
}
}
module.exports = postType;