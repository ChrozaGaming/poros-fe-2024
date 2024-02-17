import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPokemonDetails } from '../actions/pokemonActions';

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchPokemonDetails(search.toLowerCase()));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Pokemon"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;