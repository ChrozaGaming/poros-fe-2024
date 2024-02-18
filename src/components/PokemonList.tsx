import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../../styles/PokemonList.css';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [search, setSearch] = useState('');
    const [activePokemon, setActivePokemon] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(data => setPokemonList(data.results));
    }, []);

    const handleClick = (pokemonName) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(data => {
                setSelectedPokemon(data);
                setActivePokemon(pokemonName);
            });
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
    };

    const filteredPokemonList = pokemonList.filter(pokemon => pokemon.name.includes(search));

    return (
        <div className="container">
            <div className="search-bar">
                <form onSubmit={handleSearch}>
                    <input type="text" value={search} onChange={handleSearchChange} placeholder="Search Pokemon"/>
                </form>
            </div>
            <div className="pokemon-list">
                {filteredPokemonList.map((pokemon, index) => (
                    <Card key={index} className={`pokemon-card ${pokemon.name === activePokemon ? 'active' : ''}`}>
                        <ListGroup variant="flush">
                            <ListGroup.Item onClick={() => handleClick(pokemon.name)} className="pokemon-item">
                                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                ))}
            </div>
            {selectedPokemon && (
                <div className="selected-pokemon">
                    <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name}
                         className="selected-pokemon-img"/>
                    <h2>{selectedPokemon.name.toUpperCase()}</h2>
                    <div className="stats-container">
                        {selectedPokemon.stats.map((stat, index) => (
                            <Card key={index} className="stat-card">
                                <Card.Body>
                                    <Card.Title>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}</Card.Title>
                                    <Card.Text>{stat.base_stat}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
};
export default PokemonList;