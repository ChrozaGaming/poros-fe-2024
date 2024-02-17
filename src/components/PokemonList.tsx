import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../../styles/PokemonList.css'; // import the CSS file

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [search, setSearch] = useState(''); // Define search state

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(data => setPokemonList(data.results));
    }, []);

    const handleClick = (pokemonName) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(data => {
                // Ensure that setting the selected Pokemon does not affect the layout of other elements
                setSelectedPokemon(data);
            });
    };

    const handleSearchChange = (event) => { // Define handleSearchChange function
        setSearch(event.target.value);
    };

    const handleSearch = (event) => { // Define handleSearch function
        event.preventDefault();
    };

    const filteredPokemonList = pokemonList.filter(pokemon => pokemon.name.includes(search));

    return (

        <div className="container">
            <div className="pokemon-list">
                {filteredPokemonList.map((pokemon, index) => (
                    <Card key={index} className="pokemon-card">
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
                    <h2>{selectedPokemon.name.toUpperCase()}</h2> {/* Add this line */}
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