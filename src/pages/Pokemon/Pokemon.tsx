import { useQuery } from "react-query";
import type { PokemonResult } from "../../types/types";
import BodyLayout from "../../modules/BodyLayout/BodyLayout";
import { useParams } from "react-router-dom";
import TypeChip from "../../modules/TypeChip/TypeChip";
import styles from './Pokemon.module.css'

const Pokemon = () => {
  const { pokemonId } = useParams();
  const getPokemon = async () => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/pokemon/${pokemonId}`)
    return res.json()
  }

  const { data, error, isLoading } = useQuery<PokemonResult>({
    queryKey: 'getPokemon',
    queryFn: getPokemon,
  });

  return (
    <BodyLayout
      error={error}
      isLoading={isLoading}
      successfulElement={
        data ? (
          <div className={styles.pokemonDetails}>
            <div className={styles.pokemonHeader}>
              <div>
                {data.name}
              </div>
              <div>
                ID: {data.id}
              </div>
            </div>
            <div>
              <img alt={data.name} src={data.photo} />
            </div>
            <div className={styles.typeRow}>
              <TypeChip pokemonType={data.type1} />
              {data.type2 && (<TypeChip pokemonType={data.type2} />)}
            </div>
            <p>
              {data.description}
            </p>
          </div>
        ) : (
          <div>Sorry! Please try again later.</div>
        )}
    />
  )
};

export default Pokemon