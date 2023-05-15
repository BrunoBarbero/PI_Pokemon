const {getAllTypes} = require("../controllers/typesControllers")


const getTypesHandler = async (req, res) =>{
  try {
    const allTypes = await getAllTypes()
    res.status(200).json(allTypes)
  } catch (error) {
    res.status(400).json({error: error.message})
  }



  /*('Obtiene un arreglo con todos los tipos de pokemones. En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los tipos que encuentres en la API. Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.')*/
}

module.exports = getTypesHandler
