// src/components/PokemonList.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon } from '../actions/pokemonActions';

const PokemonList = () => {
    const dispatch = useDispatch();
    const pokemon = useSelector(state => state.pokemon);
    const { loading, data, error } = pokemon;

    useEffect(() => {
        dispatch(fetchPokemon());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            {data.map(pokemon => (
                <div key={pokemon.name}>
                    <h2>{pokemon.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default PokemonList;