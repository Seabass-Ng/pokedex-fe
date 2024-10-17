import type { PokemonResult } from "../../types/types";

const getPokemons = async (): Promise<PokemonResult[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pokemon`, {
    mode: 'cors'
  })
  return res.json()
}

export default getPokemons;