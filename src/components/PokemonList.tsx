import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', maxWidth: '50%', maxHeight: '100vh', overflowY: 'auto' }}>
                {pokemonList.map((pokemon, index) => (
                    <Card key={index} style={{ marginBottom: '40px', flex: '0 0 auto' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item onClick={() => handleClick(pokemon.name)} style={{ cursor: 'pointer' }}>
                                {pokemon.name}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                ))}
            </div>
            {selectedPokemon && (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                    height: '100vh'
                }}>
                    <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name}
                         style={{width: '300px', height: '300px'}}/>
                    <ListGroup variant="flush">
                        {selectedPokemon.stats.map((stat, index) => (
                            <ListGroup.Item key={index}>
                                {stat.stat.name}: {stat.base_stat}
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </div>
            )}
        </div>
    );
};

export default PokemonList;