import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IPokemons } from '../Home';

const Card = () => {
    const [pokemon, setPokemon] = useState<IPokemons>()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => {
                setPokemon(res.data)
            })
            .catch((res: string) => console.log(res))

    }, [])

    return (
        <Container>
            <img src={pokemon?.sprites.front_default} alt="" />
        </Container>
    )
}

export default Card