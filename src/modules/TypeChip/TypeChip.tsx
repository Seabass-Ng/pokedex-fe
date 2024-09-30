import classnames from "../../utils/classnames";
import styles from './TypeChip.module.css'

export enum TYPES {
  NORMAL = 'Normal',
  FIGHTING = 'Fighting',
  FLYING = 'Flying',
  POISON = 'Poison',
  GROUND = 'Ground',
  ROCK = 'Rock',
  BUG = 'Bug',
  GHOST = 'Ghost',
  STEEL = 'Steel',
  FIRE = 'Fire',
  WATER = 'Water',
  GRASS = 'Grass',
  ELECTRIC = 'Electric',
  PSYCHIC = 'Psychic',
  ICE = 'Ice',
  DRAGON = 'Dragon',
  DARK = 'Dark',
  FAIRY = 'Fairy'
};

type Props = {
  pokemonType: TYPES
};

const TypeChip = ({ pokemonType }: Props) => (
  <div className={classnames(styles.typeChip, styles[pokemonType.toLowerCase()])}>
    {pokemonType}
  </div>
);

export default TypeChip