const axios = require("axios");
const { pokemons, type} = require("../db/db");
const {Op} = require("sequelize");

const getPokemonsName = async(req,res)=>{
        const { nombre } = req.query;
    
        try {

        if(!nombre){return res.status(404).json({error: "coloca el personaje"})}
        
            const dbPokemons = await pokemons.findAll({
                where:{
                    nombre: { [Op.iLike]: `%${nombre}%` }
                  },
                    include: {
                      model: type,         
                      attributes: ["nombre"],
                      through: {
                          attributes: [],
                      }
                  }
                
            });
            
            const pokemonDBM = dbPokemons.map(pokemon => ({
              id: pokemon.id,
              nombre: pokemon.nombre,
              imagen: pokemon.imagen,
              vida: pokemon.vida,
              ataque: pokemon.ataque,
              defensa: pokemon.defensa,
              tipo: pokemon.types.map(type => type.nombre),
          }));
          
            if(pokemonDBM.length > 0){
            return res.status(200).json(pokemonDBM[0])
        }else{

            const apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`);

            if(apiResponse.data && apiResponse.data.name){

                    const apiPokemon = apiResponse.data;
        
                    const types = apiPokemon.types.map((typeData) => typeData.type.name);
        
                    const pokemonData = {
                        nombre: apiPokemon.name,
                        imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${apiPokemon.id}.png`,
                        vida: apiPokemon.stats[0].base_stat,
                        ataque: apiPokemon.stats[1].base_stat,
                        defensa: apiPokemon.stats[2].base_stat,
                        tipo: types,
                    }
        
                    return res.status(200).json(pokemonData);
                  }else{
                    res.status(404).json({ error: 'El Pokemon no existe' })
                  }

        }
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      };
      


module.exports = getPokemonsName;
