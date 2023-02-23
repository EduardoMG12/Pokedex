export interface IPokemon {
    id?: number,
    name: string,
    image: string,
    alt: string,
    sprites?: {
        front_default: string,
        back_default: string,
        front_shiny: string,
        back_shiny: string
    }
    abilities: {ability:{name:string}}[]
};