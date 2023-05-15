const { Router } = require('express');

const {getPokemonsHandler, getPokemonByIdHandler, getPokemonByNameHandler, postPokemonHandler} = require('../handlers/pokemonsHandler');


const pokemonsRouter = Router()
//hacer validates, finak de clase de repaso 3

pokemonsRouter.get("/", getPokemonsHandler)

pokemonsRouter.get("/:id",getPokemonByIdHandler)

pokemonsRouter.post("/",postPokemonHandler)


module.exports = pokemonsRouter