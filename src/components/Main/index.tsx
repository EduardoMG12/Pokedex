import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import Footer from '../Footer'
import Header from '../NavBar'

export interface IPokemons {
    id?: number,
    name: string,
    image: string,
    alt: string,
    sprites?: any
}

export default () => {

    const [pokemons, setPokemons] = useState<IPokemons[]>([]);

    const [pokemonsToRender, setPokemonsToRender] = useState(pokemons)



    useEffect(() => {
        getPokemons()
    }, [])

    const getPokemons = (pokemonsQuantity?: number) => {
        let endPoints = []
        let cardsLoading = pokemonsQuantity || 33;

        for (let i = 1; i <= cardsLoading; i++) {
            endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        const response = axios.all(endPoints.map((url: string) => axios.get(url))).then((res) => {
            setPokemons(res.map((r: any) => r.data))
            setPokemonsToRender(res.map((r: any) => r.data))
        }).catch((res: string) => console.log(res))

        return response;
    }

    return (

        <PokemonsContext.Provider value={{ pokemons, setPokemons, getPokemons, pokemonsToRender, setPokemonsToRender }}>
            <Header />
            <Outlet />
            <Footer />
        </PokemonsContext.Provider>

    )
}