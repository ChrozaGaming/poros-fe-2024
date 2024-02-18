import React from 'react';
import PokemonList from '../components/PokemonList';
import '../../styles/pages/index.css'

const IndexPage = () => {
    return (
        <div>
            <h1>All Pokemon</h1>
            <PokemonList />
        </div>
    );
};

export default IndexPage;