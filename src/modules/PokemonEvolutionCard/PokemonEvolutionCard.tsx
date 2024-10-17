import { Link } from "react-router-dom";
import type { PokemonResult } from "../../types/types";
import classnames from "../../utils/classnames";
import TypeChip from "../TypeChip/TypeChip";
import styles from './PokemonEvolutionCard.module.css';

type Props = {
  pokemon: PokemonResult
};

const PokemonEvolutionCard = ({
  pokemon
}: Props) => {
  const bgClass = styles[`bg${pokemon.type1}`];
  const borderClass = styles[`border${pokemon.type2 || pokemon.type1}`];
  return (
    <div className={styles.cardContainer}>
      <div
        className={
          classnames(
            styles.imgContainer,
            bgClass,
            borderClass,
          )
        }
      >
        <img src={pokemon.photo} />
      </div>
      <div className={classnames(styles.metadata, styles[pokemon.type1.toLowerCase()])}>
        <a href={`/pokemon/${pokemon.id}`}>{pokemon.name}</a>
        <div className={styles.typeRow}>
          <TypeChip pokemonType={pokemon.type1} />
          {pokemon.type2 && (<TypeChip pokemonType={pokemon.type2} />)}
        </div>
      </div>
    </div>
  );
};

export default PokemonEvolutionCard;