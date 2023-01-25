import { Container } from '@mui/system'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import { IPokemons } from '../../components/Main';
import { PokemonsContext } from '../../contexts/PokemonsContext';

const Card = () => {
    const [pokemon, setPokemon] = useState<IPokemons[]>([])
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
            {pokemon.length == 0
                ?

                < Loading />

                :

                <Container>
                    <img src={pokemon?.sprites.front_default} alt="" />
                </Container>

            }
        </>
    )
}

export default Card