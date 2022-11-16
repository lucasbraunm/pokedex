import { PokemonClient, Pokemon } from 'pokenode-ts';
import React, { useState, useCallback, useEffect } from 'react';
import { PokemonCardContainer } from "./style";

type PokemonCardProps = {
    pokemonName: string
};

const PokemonCard = ({
    pokemonName
    }: PokemonCardProps) => {
        const [pokemon, setPokemon] = useState<Pokemon>();

        const getPokemonFromAPI = useCallback(async () => {
            const api = new PokemonClient();
            
            await api
                .getPokemonByName(pokemonName)
                .then((data) => {
                    setPokemon(data);
                    console.log(data);
                })
                .catch((error) => console.error(error));
        }, []);

        useEffect(() => {
            getPokemonFromAPI();
        }, []);

        return (
            <PokemonCardContainer>
                <p>{pokemon?.id}</p>
                {pokemonName}
                <img alt='img' src={pokemon?.sprites.other?.['official-artwork'].front_default || ''}/>
            </PokemonCardContainer>
        )
};

export default PokemonCard;