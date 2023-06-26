import axios from "axios"

const PokemonService = axios.create({baseURL: 'https://pokeapi.co/api/v2/'})

export async function getPokemon(value) {
    console.log(value)
    return await PokemonService.get(`pokemon/${value}`)
}

export async function getPokemons() {
    return await ((PokemonService.get(`pokemon?limit=100000&offset=0`)))
}