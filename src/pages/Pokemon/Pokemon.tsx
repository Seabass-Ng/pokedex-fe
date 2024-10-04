import { useQuery } from "react-query";
import type { PokemonResult } from "../../types/types";
import BodyLayout from "../../modules/BodyLayout/BodyLayout";
import { Link, useParams } from "react-router-dom";
import TypeChip from "../../modules/TypeChip/TypeChip";
import styles from './Pokemon.module.css'
import classnames from "../../utils/classnames";
import MoveTable from "../../modules/MoveTable/MoveTable";
import EvolveFrom from "../../modules/Evolution/EvolveFrom";
import EvolveTo from "../../modules/Evolution/EvolveTo";

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
    >
      <div className={styles.page}>
        <Link className={styles.backArrow} to="..">
          &larr; Back
        </Link>
        {data ? (
          <>
            <div className={classnames(styles.pokemonDetails, styles[data.type1.toLowerCase()])}>
              <div className={styles.pokemonHeader}>
                <div className={styles.pokemonHeaderItem}>
                  {data.name}
                </div>
                <div className={styles.pokemonHeaderItem}>
                  ID: {data.id}
                </div>
              </div>
              <div>
                <img alt={data.name} src={data.photo} />
              </div>
              <div className={classnames(styles.cellWithHeader, styles[data.type1.toLowerCase()])}>
                <div className={styles.header}>
                  Types
                </div>
                <div className={styles.typeRow}>
                  <TypeChip pokemonType={data.type1} />
                  {data.type2 && (<TypeChip pokemonType={data.type2} />)}
                </div>
              </div>
              <div className={classnames(styles.cellWithHeader, styles[data.type1.toLowerCase()])}>
                <div className={styles.header}>
                  Description
                </div>
                <p className={styles.pokemonDescription}>
                  {data.description}
                </p>
              </div>
            </div>
            <MoveTable pokemonId={data.id} />
            <EvolveFrom pokemon={data} />
            <EvolveTo pokemon={data} />
          </>
        ) : (
          <div>Sorry! Please try again later.</div>
        )}
      </div>
    </BodyLayout>
  )
};

export default Pokemon