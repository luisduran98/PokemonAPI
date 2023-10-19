require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB} = process.env;
const pokemonsFunction = require("../models/pokemons");
const typeFunction = require("../models/type");

const dbPokemon = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB}`,
    { logging: false, native: false }
 );

 pokemonsFunction(dbPokemon);
 typeFunction(dbPokemon);

const {pokemons, type} = dbPokemon.models;

pokemons.belongsToMany(type, { through: 'pokemonsType' });
type.belongsToMany(pokemons, { through: 'pokemonsType' });

 

 module.exports = {
    dbPokemon,
    ...dbPokemon.models,
 }