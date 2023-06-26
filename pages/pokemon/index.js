import { getPokemons } from "../../service/pokemon"
import { useState } from "react"

export default function Pokemon() {
    const [pokemons, setPokemons] = useState([])

    async function handleSearch() {
        const newPokemons = await getPokemons()
        console.log(newPokemons)
        setPokemons(newPokemons.data.results)
    }

    return (
        <div>
            <button onClick={async() => await handleSearch()}>Buscar Pokemon</button>
                {pokemons.length && pokemons.map((pokemon, index) => (
                <>
                    <h1>{`${pokemon.name} - ${index+1}`}</h1>
                    <img width={100} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${(index+1).toString().padStart(3, '0')}.png`}/>
                </>
            ))}
        </div>
    )
}