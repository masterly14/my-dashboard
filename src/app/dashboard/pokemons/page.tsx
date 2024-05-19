import { PokemonsResponse } from "@/app/pokemons/pokemons-response";
import { SimplePokemon } from "@/app/pokemons/simple-pokemon";
import CardPoke from "./CardPoke";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then( res => res.json() )

    const dataPok = data.results.map((pokemon) => ({
      id: pokemon.url.split('/').at(6)!,
      name: pokemon.name,
      url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.url.split('/').at(6)}.svg`
    }))

    return dataPok
}

export default async function PokemonPage () { 
    const pokemons = await getPokemons(151);

  return (
    <div className="">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        <CardPoke pokemons={pokemons}/>
      </div> 
    </div>
  )
}
