// src/pages/index.tsx
import React from 'react';
import PokemonList from '../components/PokemonList';

const IndexPage = () => {
    return (
        <div>
            <h1>Pokemon List</h1>
            <PokemonList />
        </div>
    );
};

export default IndexPage;