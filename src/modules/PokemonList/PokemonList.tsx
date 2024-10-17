import styles from './PokemonList.module.css';
import type { PokemonResult } from '../../types/types';
import BodyLayout from '../BodyLayout/BodyLayout';

type Props = {
  error: unknown;
  pokemons: Array<PokemonResult>;
};

const PokemonList = ({
  error,
  pokemons
}: Props) => {
  return (
    <BodyLayout
      error={error}
    >
      <h1>Welcome to the Pokedex</h1>
      <div className={styles.pokemonList}>
        {pokemons && pokemons.map((pokemon) => (
          <a className={styles.pokemon} key={pokemon.id} href={`/pokemon/${pokemon.id}`}>
            <img src={pokemon.photo} />
            {pokemon.name}
          </a>
        ))}
      </div>
    </BodyLayout>
  )
}

export default PokemonList;