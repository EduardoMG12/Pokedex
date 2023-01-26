import { Box, CircularProgress } from '@mui/material';
import { Container } from '@mui/system'
import axios from 'axios'
import { IPokemon } from 'interfaces';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Card = () => {
    const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon)
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => {
                setPokemon(res.data)
            })
            .catch((res: string) => console.log(res))

    }, [])

    return (
        <>
            {!pokemon?.id
                ?
                <Box sx={{ maxWidth: "100vw", minHeight: "70vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <CircularProgress color="warning" />
                </Box>
                :

                <Container>
                    <img src={pokemon?.sprites?.front_default} alt="" />
                </Container>

            }
        </>
    )
}

export default Card;