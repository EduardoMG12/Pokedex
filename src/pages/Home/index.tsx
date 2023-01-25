import { Container, Grid } from '@mui/material'
import React, { useContext } from 'react'
import PokemonCard from '../../components/PokemonCard'
import { Section } from './style'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'
import { IPokemons } from '../../components/Main'
import { PokemonsContext } from '../../contexts/PokemonsContext'

export const Home = () => {
    const { pokemons, setPokemons, getPokemons } = useContext(PokemonsContext)


    return (
        <Section>
            <Container maxWidth={false}>
                {
                    pokemons.length === 0
                        ?
                        <Loading />
                        :
                        <Grid container spacing={3} gridTemplateColumns={"repeat(auto-fill, minmax(345px, 1fr)"}>
                            {pokemons.map((pokemon: any) => {
                                return (
                                    <Grid item key={pokemon.id}>
                                        <Link to={`/card/${pokemon.id}`}>
                                            <PokemonCard name={pokemon.name} image={pokemon.sprites.front_default || ""} alt={`image of ${pokemon.name}`} />
                                        </Link>
                                    </Grid>
                                )
                            })}
                        </Grid>
                }
            </Container>
            <Button label={"Loading more"} onClick={() => { getPokemons(pokemons.length + 33) }} />
        </Section>
    )
}

export default Home