import type { PokemonResult } from "../../types/types";

export type Props = {
  pokemon: PokemonResult;
}

export type Result = {
  condition: string;
  evolvePokemon: PokemonResult;
}