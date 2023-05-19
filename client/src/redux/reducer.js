import { GET_POKEMONS, GET_POKEMON_BY_ID, CLEAN_DETAIL, GET_TYPES } from "./actions";

const initialState = {
    pokemons: [],
    types: [],
    pokemonById: {}
};

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_POKEMONS: 
            return {...state, pokemons: action.payload}

        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokemonById: action.payload
            } 

        case GET_TYPES: 
            return {...state, types: action.payload}
            
        case CLEAN_DETAIL:
           return {
            ...state, 
            pokemonById: {}
        }


        default:
            return{...state};
    }
}

export default reducer