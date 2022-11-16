import React, { useState, useCallback, useEffect } from 'react';
import { PokemonClient, NamedAPIResource, Pokemon } from 'pokenode-ts';
import { PokemonListContainer } from './style'
import PokemonCard from '../PokemonCard'

type PokemonListProps = {
    offset: number;
    pagination: number;
};

const PokemonList = ({
    offset=0,
    pagination=20
    }: PokemonListProps) => {
    const [pokemonList, setPokemonList] = useState<NamedAPIResource[]>([]);

    const getListPokemonsFromAPI = useCallback(async () => {
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
        getListPokemonsFromAPI();
    }, []);

    return (
        <PokemonListContainer>
            {pokemonList &&
                pokemonList?.length > 0 &&
                pokemonList.map((pokemon) => (
                    <PokemonCard 
                    pokemonName={pokemon.name}
                    />
            ))}
        </PokemonListContainer>
    );
};

export default PokemonList;