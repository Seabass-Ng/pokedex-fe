import type { PokemonResult } from "../../types/types";
import BodyLayout from "../BodyLayout/BodyLayout";
import TypeChip from "../TypeChip/TypeChip";
import styles from './Pokemon.module.css'
import classnames from "../../utils/classnames";
import MoveTable from "../MoveTable/MoveTable";
import EvolveFrom from "../Evolution/EvolveFrom";
import EvolveTo from "../Evolution/EvolveTo";
import Link from "next/link";

type Props = {
  error: unknown
  pokemon?: PokemonResult
}

const Pokemon = ({
  pokemon,
  error
}: Props) => {
  return (
    <BodyLayout
      error={error}
    >
      <div className={styles.page}>
        <Link className={styles.backArrow} href="..">
          &larr; Back
        </Link>
        {pokemon ? (
          <>
            <div className={classnames(styles.pokemonDetails, styles[pokemon.type1.toLowerCase()])}>
              <div className={styles.pokemonHeader}>
                <div className={styles.pokemonHeaderItem}>
                  {pokemon.name}
                </div>
                <div className={styles.pokemonHeaderItem}>
                  ID: {pokemon.id}
                </div>
              </div>
              <div>
                <img alt={pokemon.name} src={pokemon.photo} />
              </div>
              <div className={classnames(styles.cellWithHeader, styles[pokemon.type1.toLowerCase()])}>
                <div className={styles.header}>
                  Types
                </div>
                <div className={styles.typeRow}>
                  <TypeChip pokemonType={pokemon.type1} />
                  {pokemon.type2 && (<TypeChip pokemonType={pokemon.type2} />)}
                </div>
              </div>
              <div className={classnames(styles.cellWithHeader, styles[pokemon.type1.toLowerCase()])}>
                <div className={styles.header}>
                  Description
                </div>
                <p className={styles.pokemonDescription}>
                  {pokemon.description}
                </p>
              </div>
            </div>
            {/* <MoveTable pokemonId={pokemon.id} /> */}
            {/* <EvolveFrom pokemon={pokemon} /> */}
            {/* <EvolveTo pokemon={pokemon} /> */}
          </>
        ) : (
          <div>Sorry! Please try again later.</div>
        )}
      </div>
    </BodyLayout>
  )
};

export default Pokemon