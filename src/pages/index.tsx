import React from 'react';
import PokemonList from '../components/PokemonList';
import '../../styles/pages/index.css'

const IndexPage = () => {
    return (
        <div>
            <h1>List Pokemon</h1>
            <PokemonList />
        </div>
    );
};

export default IndexPage;