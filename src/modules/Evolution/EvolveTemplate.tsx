import BodyLayout from "../BodyLayout/BodyLayout";
import classnames from "../../utils/classnames";
import PokemonEvolutionCard from "../PokemonEvolutionCard/PokemonEvolutionCard";
import EvolveStep from "../EvolveStep/EvolveStep";
import styles from './EvolveTemplate.module.css';
import type { PokemonResult } from "../../types/types";

type Props = {
  condition: string;
  pokemon1: PokemonResult;
  pokemon2: PokemonResult;
};

const EvolveTemplate = ({
  condition,
  pokemon1,
  pokemon2,
}: Props) => (
  <div
    className={
      classnames(
        styles.container,
        styles[`bg${pokemon1?.type1}`],
        styles[`border${pokemon1?.type2 || pokemon1?.type1}`]
      )
    }
  >
    <PokemonEvolutionCard
      pokemon={pokemon1 as PokemonResult}
    />
    <EvolveStep
      condition={condition}
    />
    <PokemonEvolutionCard
      pokemon={pokemon2 as PokemonResult}
    />
  </div>
);

export default EvolveTemplate