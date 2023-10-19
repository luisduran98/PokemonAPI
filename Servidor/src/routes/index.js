const {Router} = require("express");
const routes = Router();
const pokemonsRouter = require("./pokemonsRoute");
const typeRouter = require("./typeRoute");
const homeRouter = require("./homeRoute");

routes.use("/",homeRouter);
routes.use("/pokemons",pokemonsRouter);
routes.use("/types",typeRouter);


module.exports = routes;