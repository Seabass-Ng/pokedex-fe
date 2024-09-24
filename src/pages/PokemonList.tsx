import { useQuery } from 'react-query'
import styles from './PokemonList.module.css';

type PokemonResult = {
  id: number;
  name: string;
  description: string;
  photo: string;
  type1: string;
  type2?: string;
};

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
    <div className={styles.pokemonList}>
      {data && data.map((pokemon) => (
        <div className={styles.pokemon} key={pokemon.id}>
          <img src={pokemon.photo} />
          {pokemon.name}
        </div>
      ))}
    </div>
  )
}

export default PokemonList;