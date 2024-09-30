import { useQuery } from 'react-query'
import styles from './PokemonList.module.css';
import type { PokemonResult } from '../../types/types';
import BodyLayout from '../../modules/BodyLayout/BodyLayout';

const PokemonList = () => {
  const getPokemons = async () => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/pokemon`)
    return res.json()
  }

  const { data, error, isLoading } = useQuery<Array<PokemonResult>>({
    queryKey: 'getPokemons',
    queryFn: getPokemons,
  });

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <BodyLayout
      error={error}
      isLoading={isLoading}
      successfulElement={(
        <div className={styles.pokemonList}>
          {data && data.map((pokemon) => (
            <div className={styles.pokemon} key={pokemon.id}>
              <img src={pokemon.photo} />
              {pokemon.name}
            </div>
          ))}
        </div>
      )}
    />
  )
}

export default PokemonList;