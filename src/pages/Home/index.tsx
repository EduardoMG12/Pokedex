import { Box, Button, CircularProgress, Container, Grid } from '@mui/material'
import React from 'react'
import PokemonCard from '../../components/PokemonCard'
import { Section } from './style'
import { Link } from 'react-router-dom'
import { usePokemons } from '../../hooks/usePokemons'


export const Home = () => {

    const { getPokemons, pokemonsToRender } = usePokemons()

    return (
        <Section>
            <Container maxWidth={false}>
                {
                    pokemonsToRender.length === 0
                        ?
                        <Box sx={{ maxWidth: "100", minHeight: "70vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <CircularProgress color="warning" />
                        </Box>
                        :
                        <Grid container spacing={3} gridTemplateColumns={"repeat(auto-fill, minmax(345px, 1fr)"}>
                            {pokemonsToRender.map((pokemon: any) => {
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
            <Box sx={{ maxWidth: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }} >

                <Button sx={{ marginBlock: "2rem" }} size="medium" variant="contained" color="warning" onClick={() => { getPokemons(pokemonsToRender.length + 33) }}>
                    Loading more
                </Button>
            </Box>
        </Section >
    )
}

export default Home;