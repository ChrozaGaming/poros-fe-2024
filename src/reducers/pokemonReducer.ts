// src/reducers/pokemonReducer.ts
const initialState = {
    loading: false,
    data: [],
    error: ''
};

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POKEMON_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'FETCH_POKEMON_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            };
        case 'FETCH_POKEMON_FAILURE':
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default pokemonReducer;