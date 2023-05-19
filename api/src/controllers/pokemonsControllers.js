const {Pokemon, Type} = require("../db"); 
const axios = require('axios')

    
       
const getAllPokemons = async (name) => {
   
   if(!name){
    const dbPokemons = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ["name"],
            through:{
                attributes:[]
            }    
        } 
    });

    const apiPokemonsData = (await axios.get("https://pokeapi.co/api/v2/pokemon")).data
    const apiPokemons = apiPokemonsData.results
    console.log(apiPokemons);

    const pokemonsUrl = await apiPokemons.map(obj => {
        return (obj.url)    
    });
    console.log(pokemonsUrl);
    
    return [...dbPokemons, ...pokemonsUrl]
    }
     

}

const getPokemonById = async (id, source) =>{
    
    if(source === "db"){
        const pokemon = await Pokemon.findByPk(id, {
            include: {
                model: Type,
                attributes: ["name"],
                through:{
                    attributes:[]
                }    
            } 
        });

     return pokemon
    }

    if (source === "api") {
       const pokemonData = (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
       console.log(pokemonData);
       const typesmapped = pokemonData.types.map(obj => obj.type.name)

       const pokemon = {
            name: pokemonData.forms[0].name, 
            image: pokemonData.sprites.front_default,
            healt: pokemonData.stats[0].base_stat, 
            damage: pokemonData.stats[1].base_stat, 
            defense: pokemonData.stats[2].base_stat,
            speed: pokemonData.stats[5].base_stat,
            types: typesmapped
        }
        

        return pokemon
    }
}  

const getPokemonByName = async (name) => {
    if(name){
        name = name.toLowerCase() 
        const dbPokemon = await Pokemon.findAll({
            where: {
                name
            } 
        })
        const apiPokemonData = (await axios.get(`https://pokeapi.co/api/v2/pokemon`)).data
        const apiPokemon = apiPokemonData.results.filter(pokemon => pokemon.name === name)
        
        if(!apiPokemon.length && !dbPokemon.length) throw Error("No se encontro ningun Pokemon con ese nombre")
        
        return [...dbPokemon, ...apiPokemon]
    }
}

const createPokemon = async (name, image, healt, damage, defense, speed, types) => {
    const newPokemon = await Pokemon.create({name, image, healt, damage, defense, speed})
    await newPokemon.addType(types)

    return newPokemon
}
module.exports = {
    getAllPokemons,
    getPokemonById,
    getPokemonByName,
    createPokemon
}