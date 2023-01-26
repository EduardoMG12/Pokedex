import axios from "axios";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

export interface IPokemon {
    id?: number,
    name: string,
    image: string,
    alt: string,
    sprites?: any
}

interface IPokemonProviderProps {
    children: ReactNode
}

interface IPokemonContext {
    pokemons: IPokemon[]
    setPokemons: Dispatch<SetStateAction<IPokemon[]>>
    getPokemons: (pokemonsQuantity?: number) => Promise<void>
    pokemonsToRender: IPokemon[]
    setPokemonsToRender: Dispatch<SetStateAction<IPokemon[]>>
}

const PokemonsContext = createContext<IPokemonContext>([] as unknown as IPokemonContext);

export const PokemonProvider: React.FC<IPokemonProviderProps> = ({children}) => {

    const [pokemons, setPokemons] = useState<IPokemon[]>([]);

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
        <PokemonsContext.Provider value={{
            pokemons,
            setPokemons,
            getPokemons,
            pokemonsToRender,
            setPokemonsToRender
        }}>
            {children}
        </PokemonsContext.Provider>
    )
}

export const usePokemons = () => {
    return useContext(PokemonsContext)
}