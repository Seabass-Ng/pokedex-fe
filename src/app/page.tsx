import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import PokemonList from "../modules/PokemonList/PokemonList";
import getPokemons from "../modules/PokemonList/getPokemons";

const PokemonListPage = async () => {
  const queryClient = new QueryClient()

  let pokemons;
  let fetchError;
  try {
    pokemons = await queryClient.fetchQuery({
      queryKey: ['getPokemons'],
      queryFn: getPokemons,
    })
  } catch (error) {
    fetchError = error;
    console.error(error);
  }


  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PokemonList error={fetchError} pokemons={pokemons || []} />
    </HydrationBoundary>
  )
};

export default PokemonListPage;