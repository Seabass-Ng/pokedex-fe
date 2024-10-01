import { TYPES } from "../../types/types";
import classnames from "../../utils/classnames";
import styles from './TypeChip.module.css'

type Props = {
  pokemonType: TYPES
};

const TypeChip = ({ pokemonType }: Props) => (
  <div className={classnames(styles.typeChip, styles[pokemonType.toLowerCase()])}>
    {pokemonType}
  </div>
);

export default TypeChip