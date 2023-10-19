const {Router} = require("express");
const pokemonsRouter = Router();
const getPokemons = require("../controllers/getPokemons")
const getPokemonsName = require("../controllers/getPokemonsName");
const getPokemonsId = require("../controllers/getPokemonsId");
const postPokemons = require("../controllers/postPokemons");

pokemonsRouter.get("/",getPokemons);

pokemonsRouter.get("/name",getPokemonsName);

pokemonsRouter.get("/:id",getPokemonsId);

pokemonsRouter.post("/",postPokemons);

module.exports = pokemonsRouter;



