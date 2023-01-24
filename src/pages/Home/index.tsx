import { Container, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from '../../components/PokemonCard'
import { Section } from './style'
import Button from '../../components/Button'

export interface IPokemons {
    id?: number,
    name: string,
    image: string,
    alt: string,
    sprites?: any
}

export const Home = () => {
    const [pokemons, setPokemons] = useState<IPokemons[]>([]);

    useEffect(() => {
        getPokemons(20)
    }, [])

    const getPokemons = (pokemonsQuantity: number) => {
        let endPoints = []
        let cardsLoading = pokemonsQuantity || 10;

        for (let i = 1; i <= cardsLoading; i++) {
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        const response = axios.all(endPoints.map((url: string) => axios.get(url))).then((res) => {
            setPokemons(res.map((r: any) => r.data))
        }).catch((res: string) => console.log(res))

        return response;
    }
    console.log(pokemons)
    return (
        <Section>
            <Container maxWidth={false}>
                <Grid container spacing={3}>
                    {pokemons.map((pokemon) => {
                        return (
                            <Grid item xs={2} key={pokemon.id}>
                                <PokemonCard name={pokemon.name} image={pokemon.sprites.front_default || ""} alt={`image of ${pokemon.name}`} />
                            </Grid>
                        )
                    })}
                </Grid>

            </Container>
            <Button label={"Loading more"} onClick={() => { getPokemons(pokemons.length + 5) }} />
        </Section>
    )
}

export default Home