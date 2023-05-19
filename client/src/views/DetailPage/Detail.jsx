import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clean_detail, getPokemonById } from "../../redux/actions";

const Detail = ()=>{
    const { id } = useParams();
    
    const dispatch = useDispatch()
    const pokemonById = useSelector(state => state.pokemonById)

    useEffect(()=> {
        dispatch(getPokemonById(id))

        return ()=> dispatch(clean_detail())
    }, [id])


    return(
        <>
            <h1>{pokemonById.name}</h1>
            <h2>{pokemonById.id}</h2>
            <img src="" alt="" />
            <h2>{pokemonById.healt}</h2>
            <h2>{pokemonById.damage}</h2>
            <h2>{pokemonById.defense}</h2>
            <h2>{pokemonById.speed}</h2>
            <h2>{pokemonById.types}</h2>

        </>
    )
}

export default Detail;