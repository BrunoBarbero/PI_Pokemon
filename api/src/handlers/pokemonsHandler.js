const {createPokemon, getPokemonById, getAllPokemons, getPokemonByName} = require('../controllers/pokemonsControllers')

//buena practica: los handlers no interacrua con los modelos
//lo hacen los controllers

const getPokemonsHandler = async (req, res) =>{
        const {name} = req.query 
        
    try {
        if(!name){
        const allPokemons = await getAllPokemons(name);
        res.status(200).json(allPokemons)
        }
        else{
            const pokemonByName = await getPokemonByName(name)
            res.status(200).json(pokemonByName)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
    /*"Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información."*/
}

const getPokemonByIdHandler = async (req, res) =>{
    const {id} = req.params;
    const source = isNaN(id) ? "db" : "api";
    try {
        const pokemon = await getPokemonById(id, source);
        res.status(200).json(pokemon)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    /*"Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto con la información pedida en el detalle de un pokemon. El pokemon es recibido por parámetro (ID). Tiene que incluir los datos del tipo de pokemon al que está asociado. Debe funcionar tanto para los pokemones de la API como para los de la base de datos."*/
}


const postPokemonHandler = async (req, res) =>{
    const { name, image, healt, damage, defense, speed, types } = req.body;
    try { 
        const newPokemon = await createPokemon(name, image, healt, damage, defense, speed, types)
        res.status(201).send("Pokemon creado exitosamente")

    } catch (error) {
        res.status(400).json({error: error.message})
    }
    
    /*"Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con sus tipos solicitados. Toda la información debe ser recibida por body. Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos indicados (debe poder relacionarse al menos con dos).")*/
}

module.exports = {
    getPokemonsHandler,
    getPokemonByIdHandler,
    postPokemonHandler
}