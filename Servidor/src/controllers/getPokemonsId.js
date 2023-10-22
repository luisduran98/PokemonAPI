const axios = require("axios");

const getPokemonsId = async (req, res) => {
    const { id } = req.params;
    const pokemonId = parseInt(id);

    if (isNaN(pokemonId) || pokemonId <= 0 || pokemonId === 0) {
        return res.status(400).json({ error: "ID no válido" });
    }

    try {

        if(pokemonId > 0 && pokemonId < 81){
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

        if (response.status === 200) {
            const responseData = response.data;
     
            const tipos = [];
     
            if (responseData.types.length > 0) {tipos.push(responseData.types[0].type.name)};
     
            if (responseData.types.length > 1) {tipos.push(responseData.types[1].type.name)};
     
            res.status(200).json({
               id: responseData.id,
               nombre: responseData.name,
               imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${responseData.id}.png`,
               vida: responseData.stats[0].base_stat,
               ataque: responseData.stats[1].base_stat,
               defensa: responseData.stats[2].base_stat,
               tipo: tipos,
            })
        
        }}else {
                res.status(404).json({ error: "No se encontró el Pokémon en la API" });
            }
        } catch (error) {
            res.status(500).json({ error: "Error al buscar el Pokémon en la API" });
        }
    
}

module.exports = getPokemonsId;
