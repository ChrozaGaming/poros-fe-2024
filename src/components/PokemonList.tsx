import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => response.json())
            .then(data => setPokemonList(data.results));
    }, []);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', maxWidth: '50%', maxHeight: '100vh', overflowY: 'auto' }}>
            {pokemonList.map((pokemon, index) => (
                <Card key={index} style={{ marginBottom: '10px', flex: '0 0 auto' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{pokemon.name}</ListGroup.Item>
                    </ListGroup>
                </Card>
            ))}
        </div>
    );
};
export default PokemonList;