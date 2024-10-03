import { useQuery } from "react-query";
import type { Props, Result } from "./types";
import EvolveTemplate from "./EvolveTemplate";
import BodyLayout from "../BodyLayout/BodyLayout";

const EvolveTo = ({
  pokemon
}: Props) => {
  const getEvolveTo = async () => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/pokemon/${pokemon.id}/evolveTo`)
    if (res.status === 204) {
      return null;
    }
    const result = await res.json();
    return result;
  }

  const { data, error, isLoading } = useQuery<Result[] | null>({
    queryKey: 'getEvolveTo',
    queryFn: getEvolveTo,
  });

  return (
    <BodyLayout
      error={error}
      isLoading={isLoading}
    >
      <h3>Evolve To</h3>
      {data?.condition && (
        <EvolveTemplate
          condition={data.condition}
          pokemon1={pokemon}
          pokemon2={data.evolvePokemon}
        />
      )}
    </BodyLayout>
  )
};

export default EvolveTo;