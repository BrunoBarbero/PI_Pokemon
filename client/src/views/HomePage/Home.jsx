import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes } from "../../redux/actions";

const Home = ()=>{

    const dispatch = useDispatch()
    const pokemons = useSelector(state=>state.pokemons)
    const types = useSelector(state => state.types)

    useEffect(()=> {
        dispatch(getPokemons());
        dispatch(getTypes());
        
    }, [])//podria ser pokemons, habria que importar useselector


    return(
        <>
            <CardsContainer />
        </>
    )
}

export default Home;