import React, { useState, useCallback, useEffect } from 'react';
import { PokemonClient, NamedAPIResource, Pokemon } from 'pokenode-ts';
import { Card, CardsContainer } from './style'

type PokemonCardsProps = {
    offset: number;
    pagination: number;
};

const PokemonCards = ({
    offset=0,
    pagination=20
    }: PokemonCardsProps) => {
    const [pokemonList, setPokemonList] = useState<NamedAPIResource[]>([]);

    const getPokemonsFromAPI = useCallback(async () => {
        const api = new PokemonClient();
        
        await api
            .listPokemons(offset, pagination)
            .then((data) => {
                setPokemonList(data?.results);
                console.log(data);
            })
            .catch((error) => console.error(error));
    }, []);
    
    useEffect(() => {
        getPokemonsFromAPI();
    }, []);

    return (
        <CardsContainer>
            {pokemonList &&
                pokemonList?.length > 0 &&
                pokemonList.map((pokemon) => (
                    <Card>{pokemon.name}</Card>
            ))}
        </CardsContainer>
    );
};

export default PokemonCards;