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

const fetchPokemonRequest = () => {
    return { type: 'FETCH_POKEMON_REQUEST' };
};

const fetchPokemonSuccess = pokemon => {
    return { type: 'FETCH_POKEMON_SUCCESS', payload: pokemon };
};

const fetchPokemonFailure = error => {
    return { type: 'FETCH_POKEMON_FAILURE', payload: error };
};

export const fetchPokemonDetails = (id) => {
    return dispatch => {
        dispatch(fetchPokemonDetailsRequest());
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => {
                dispatch(fetchPokemonDetailsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchPokemonDetailsFailure(error.message));
            });
    };
};

const fetchPokemonDetailsRequest = () => {
    return { type: 'FETCH_POKEMON_DETAILS_REQUEST' };
};

const fetchPokemonDetailsSuccess = pokemonDetails => {
    return { type: 'FETCH_POKEMON_DETAILS_SUCCESS', payload: pokemonDetails };
};

const fetchPokemonDetailsFailure = error => {
    return { type: 'FETCH_POKEMON_DETAILS_FAILURE', payload: error };
};