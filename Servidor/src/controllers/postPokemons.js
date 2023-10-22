const { type , pokemons} = require("../db/db");
const axios = require("axios");

const postPokemons = async (req, res) => {
   try {
    const {nombre,vida,ataque,defensa,tipo} = req.body;
    
    if(!nombre || !vida || !defensa || !ataque) {return res.status(404).json({error: "Asegurate de llenar todos los campos"})}

    const pokemonCreate = await pokemons.create({
    nombre,
    vida,
    ataque,
    defensa,
    imagen: `https://i.pinimg.com/originals/e3/9c/75/e39c757d5321eb538b7e3313adbf5de6.jpg`
   })

   pokemonCreate.addTypes(tipo);

   return res.status(200).json("se creo");
   } catch (error) {
    res.status(500).json("Hubo un error al insertar tipos de Pokémon en la base de datos.")
   }
};

module.exports = postPokemons;




// try {
//     const response = await axios.get("https://pokeapi.co/api/v2/type");
//     const types = response.data.results;

//     for (let i = 0; i < types.length; i++) {
//         await type.create({ nombre: types[i].name });
//     }

//     res.status(200).json("Tipos de Pokémon insertados en la base de datos.");
// } catch (error) {
//     console.error(error);
//     res.status(500).json("Hubo un error al insertar tipos de Pokémon en la base de datos.");
// }


// try {
//     const response = await axios.get("https://pokeapi.co/api/v2/type");
//     const types = response.data.results;

//     for (let i = 0; i < types.length; i++) {
//         await type.create({ nombre: types[i].name });
//     }

//     res.status(200).json("Tipos de Pokémon insertados en la base de datos.");
// } catch (error) {
//     console.error(error);
//     res.status(500).json("Hubo un error al insertar tipos de Pokémon en la base de datos.");
// }