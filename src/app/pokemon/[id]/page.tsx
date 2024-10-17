import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import getPokemon from "../../../modules/Pokemon/getPokemon";
import Pokemon from "../../../modules/Pokemon/Pokemon";
import getPokemons from "../../../modules/PokemonList/getPokemons";

type Props = {
  params: {
    id: string
  }
}

export const generateStaticParams = async () => {
  const pokemons = await getPokemons();
  return (pokemons || []).map(
    pokemon => ({ id: pokemon.id.toString() })
  )
};

export const getPokemonInfo = async (params: Props["params"]) => {
  return await getPokemon(params.id);
};

const PokemonPage = async ({ params }: Props) => {
  const queryClient = new QueryClient()
  let pokemon;
  let fetchError;

  try {
    pokemon = await getPokemonInfo(params)
  } catch (error) {
    fetchError = error;
    console.error(error);
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Pokemon error={fetchError} pokemon={pokemon} />
    </HydrationBoundary>
  )
};

export default PokemonPage;