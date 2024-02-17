import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../../styles/PokemonList.css'; // import the CSS file

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(data => setPokemonList(data.results));
    }, []);

    const handleClick = (pokemonName) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(data => setSelectedPokemon(data));
    };

    return (
        <div className="container">
            <div className="pokemon-list">
                {pokemonList.map((pokemon, index) => (
                    <Card key={index} className="pokemon-card">
                        <ListGroup variant="flush">
                            <ListGroup.Item onClick={() => handleClick(pokemon.name)} className="pokemon-item">
                                {pokemon.name}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                ))}
            </div>
            {selectedPokemon && (
                <div className="selected-pokemon">
                    <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} className="selected-pokemon-img"/>
                    <div className="stats-container">
                        {selectedPokemon.stats.map((stat, index) => (
                            <Card key={index} className="stat-card">
                                <Card.Body>
                                    <Card.Title>{stat.stat.name}</Card.Title>
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