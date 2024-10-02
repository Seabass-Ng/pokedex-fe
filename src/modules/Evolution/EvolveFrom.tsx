import { useQuery } from "react-query";
import type { PokemonResult } from "../../types/types";
import BodyLayout from "../BodyLayout/BodyLayout";
import TypeChip from "../TypeChip/TypeChip";

type Props = {
  pokemon: PokemonResult;
};

type Result = {
  condition: string;
  evolveFrom: PokemonResult;
}

const EvolveFrom = ({
  pokemon
}: Props) => {
  const getEvolveFrom = async () => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/pokemon/${pokemon.id}/evolveFrom`)
    return res.json()
  }

  const { data, error, isLoading } = useQuery<Result>({
    queryKey: 'getEvolveFrom',
    queryFn: getEvolveFrom,
  });

  return (
    <BodyLayout
      error={error}
      isLoading={isLoading}
    >
      {
        data?.condition ? (
          <>
            <h3>Evolve From</h3>
            <div>
              <div>
                <img src={data.evolveFrom.photo} />
                <div>
                  <div>{data.evolveFrom.name}</div>
                  <div>
                    <TypeChip pokemonType={data.evolveFrom.type1} />
                    {data.evolveFrom.type2 && (<TypeChip pokemonType={data.evolveFrom.type2} />)}
                  </div>
                </div>
              </div>
              <div>
                {data.condition}
                &rarrow;
              </div>
              <div>
                <img src={pokemon.photo} />
                <div>
                  <div>{pokemon.name}</div>
                  <div>
                    <TypeChip pokemonType={pokemon.type1} />
                    {pokemon.type2 && (<TypeChip pokemonType={pokemon.type2} />)}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : <></>
      }
    </BodyLayout>
  )
};

export default EvolveFrom;