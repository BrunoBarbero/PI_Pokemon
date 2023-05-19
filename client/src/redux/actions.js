import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID"
export const GET_TYPES = "GET_TYPES"
export const CLEAN_DETAIL = "CLEAN_DETAIL"

export const getPokemons = () =>{
    return async function (dispatch){
        const pokemons = (await axios.get("http://localhost:3001/pokemons")).data;
        dispatch({type: GET_POKEMONS, payload: pokemons});
    };
};

export const getTypes = () =>{
    return async function (dispatch){
        const types = (await axios.get("http://localhost:3001/types")).data
        dispatch({type: GET_TYPES, payload: types})
    }
}


export const getPokemonById = (id) =>{
    return async function (dispatch){
        const pokemonById = await axios.get(`http://localhost:3001/pokemons/${id}`);
        dispatch({type: GET_POKEMON_BY_ID, payload: pokemonById});
    };
    
};

export const clean_detail = ()=>{
    return {type: CLEAN_DETAIL}
}