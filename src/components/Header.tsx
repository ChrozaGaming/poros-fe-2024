import React, { useState, useEffect } from 'react';
import '../../styles/Header.css'; // Import CSS file for Header

const Header = ({ pokemonList, handleSearch, handleClick }) => {
    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (pokemonList) {
            setSuggestions(pokemonList.filter(pokemon => pokemon.name.includes(search)));
        }
    }, [search, pokemonList]);

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(search);
    };

    return (
        <header>
            <h1>Pokemon List</h1>
            <nav>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={search} onChange={handleChange} placeholder="Search Pokemon"/>
                    <button type="submit">Search</button>
                </form>
            </nav>
            <div className="suggestions-sidebar">
                {suggestions.map((pokemon, index) => (
                    <div key={index} onClick={() => handleClick(pokemon.name)}>
                        {pokemon.name}
                    </div>
                ))}
            </div>
        </header>
    );
};

export default Header;