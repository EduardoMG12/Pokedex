export interface IPokemon {
    id?: number,
    name: string,
    image: string,
    alt: string,
    sprites?: { front_default: string }
};