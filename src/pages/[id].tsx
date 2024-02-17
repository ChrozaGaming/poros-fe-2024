// src/pages/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import PokemonDetails from '../components/PokemonDetails';

const PokemonPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Pokemon Details</h1>
            <PokemonDetails id={id} />
        </div>
    );
};

export default PokemonPage;