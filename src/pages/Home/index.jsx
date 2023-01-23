import { Container, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from '../../components/PokemonCard'
import { Section } from './style'

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = () => {
        let endPoints = []
        for (let i = 1; i <= 10; i++){
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        const response = axios.all(endPoints.map(axios.get)).then((res) => {
    setPokemons(res.map(r => r.data))
        }).catch((res) => console.log(res))
        
        return response;
    }
    console.log(pokemons)
    return (
        <Section>
            <Container maxWidth="false">
                <Grid container spacing={3}>
                    {pokemons.map((pokemon) => {
                        return (
                       <Grid item xs={2} key={pokemon.id}>
                            <PokemonCard name={pokemon.name} image={pokemon.sprites.front_default} />
                        </Grid>
                       )
                     })}
                </Grid>

            </Container>

        </Section>
    )
}

export default Home