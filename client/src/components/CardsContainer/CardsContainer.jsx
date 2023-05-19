import Card from "../Card/Card"
import style from "./CardsContainer.module.css"
import {useSelector} from "react-redux"

const CardsContainer = ()=> {

  const pokemons = useSelector(state=>state.pokemons)
   
    return(
      <div className={style.container} >
              {pokemons && pokemons.map(pokemon=>{
                  return <Card
                  key= {pokemon.id}
                  id= {pokemon.id}  
                  name = {pokemon.name}
                  image = {pokemon.image}
                  types = {[pokemon.types]}
              />
              })}
      </div>
    )
}

export default CardsContainer