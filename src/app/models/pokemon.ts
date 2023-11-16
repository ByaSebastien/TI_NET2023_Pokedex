export interface PokemonResult {
    count: number;
    next?: string;
    previous?: string;
    results: PokemonSimple[];
}
export interface PokemonSimple {
    name: string;
    url: string;
    sprite: string;
}
export interface PokemonDetail {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: Sprites;
}
export interface Sprites {
    front_shiny: string;
    back_shiny: string;
}