// src/reducers/pokemonDetailsReducer.ts
const initialState = {
    loading: false,
    data: {},
    error: ''
};

const pokemonDetailsReducer = (state = initialState, action) => {
    loading: true
};
switch (action.type) {
    case 'FETCH_POKEMON_DETAILS_REQUEST':
        return {
            ...state,
            case 'FETCH_POKEMON_DETAILS_SUCCESS':
        return {
            ...state,
            loading: false,
            data: action.payload,
            error: ''
        };
    case 'FETCH_POKEMON_DETAILS_FAILURE':
        return {
            ...state,
            loading: false,
            data: {},
            error: action.payload
        };
    default:
        return state;
}
};

export default pokemonDetailsReducer;