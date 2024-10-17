import type { PokemonResult } from "../../types/types"

const getPokemon = async (pokemonId: string): Promise<PokemonResult> => {
  const res = await fetch(`${process.env.SERVER_URL}/pokemon/${pokemonId}`, {
    mode: 'cors'
  })
  return res.json()
}

export default getPokemon