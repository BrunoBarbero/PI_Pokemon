const {Type} = require("../db"); 
const axios = require("axios") 

const getAllTypes = async () =>{
    let dbTypes = await Type.findAll();
    if(!dbTypes.length){
        
        //pido los datos a la api para extraer los tipos de pokemons
        const apiTypesData = ( //devuelve datos no utiles
            await axios.get("https://pokeapi.co/api/v2/type")).data
        const apiTypes = apiTypesData.results //devuelve los datos utiles filtrados
        
        dbTypes = await apiTypes.forEach(obj =>{
            Type.create({name : obj.name})
            
        });
        
        return dbTypes 
    }
    
    return dbTypes 
    
    
}

module.exports = {
    getAllTypes
}

