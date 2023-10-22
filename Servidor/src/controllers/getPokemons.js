const axios = require("axios");
const { pokemons, type } = require("../db/db");

const getPokemons = async (req, res) => {
    try {
        let urls = [];

        for (let i = 1; i < 81; i++) {
            urls.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }

        let promises = urls.map((url) => axios.get(url));

        const api = await Promise.all(promises);
        const pokemonsApi = api.map((response) => {
            const types = response.data.types.map(
                (typeData) => typeData.type.name
            );

            return {
                id: response.data.id,
                nombre: response.data.name,
                imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.data.id}.png`,
                vida: response.data.stats[0].base_stat,
                ataque: response.data.stats[1].base_stat,
                defensa: response.data.stats[2].base_stat,
                tipo: types,
            };
        });

        const pokemonsDB = await pokemons.findAll({
            include: {
                model: type,
                attributes: ["nombre"],
                through: {
                    attributes: [],
                },
            },
        });

        const pokemonDBM = pokemonsDB.map((pokemon) => ({
            id: pokemon.id,
            nombre: pokemon.nombre,
            imagen: pokemon.imagen,
            vida: pokemon.vida,
            ataque: pokemon.ataque,
            defensa: pokemon.defensa,
            tipo: pokemon.types.map((type) => type.nombre),
        }));

        let pokemonsAll = [];

        if (pokemonDBM.length > 0) {
            pokemonsAll = [...pokemonsApi, ...pokemonDBM];
        } else {
            pokemonsAll = [...pokemonsApi];
        }

        return res.status(200).json(pokemonsAll);
    } catch (error) {
        console.error("Error en el servidor:", error);
        res.status(500).json("Fallo el servidor y base de datos");
    }
};

module.exports = getPokemons;



