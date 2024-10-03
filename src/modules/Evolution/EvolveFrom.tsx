import { useQuery } from "react-query";
import EvolveTemplate from "./EvolveTemplate";
import type { Props, Result } from "./types";
import BodyLayout from "../BodyLayout/BodyLayout";

const EvolveFrom = ({
  pokemon
}: Props) => {
  const getEvolveFrom = async () => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/pokemon/${pokemon.id}/evolveFrom`)
    if (res.status === 204) {
      return null;
    }
    const result = await res.json();
    return result;
  }

  const { data, error, isLoading } = useQuery<Result | null>({
    queryKey: 'getEvolveFrom',
    queryFn: getEvolveFrom,
  });

  return (
    <BodyLayout
      error={error}
      isLoading={isLoading}
    >
      {data?.condition && (
        <>
          <h3>Evolve From</h3>
          <EvolveTemplate
            condition={data.condition}
            pokemon1={data.evolvePokemon}
            pokemon2={pokemon}
          />
        </>
      )}
    </BodyLayout>
  )
};

export default EvolveFrom;