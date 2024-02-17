import axios from 'axios';

export const fetchPokemon = () => {
    return dispatch => {
        dispatch(fetchPokemonRequest());
        axios
            .get('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                dispatch(fetchPokemonSuccess(response.data.results));
            })
            .catch(error => {
                dispatch(fetchPokemonFailure(error.message));
            });
    };
};