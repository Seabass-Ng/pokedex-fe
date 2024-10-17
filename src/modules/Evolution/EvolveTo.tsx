import { useQuery } from "@tanstack/react-query";
import type { Props, Result } from "./types";
import EvolveTemplate from "./EvolveTemplate";
import BodyLayout from "../BodyLayout/BodyLayout";

const EvolveTo = ({
  pokemon
}: Props) => {
  const getEvolveTo = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/pokemon/${pokemon.id}/evolveTo`)
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

      {(data?.length || 0) > 0 &&
        (
          <>
            <h3>Evolve To</h3>
            {(data || []).map(evolveMetadata => (
              <EvolveTemplate
                condition={evolveMetadata.condition}
                pokemon1={pokemon}
                pokemon2={evolveMetadata.evolvePokemon}
              />
            ))}
          </>
        )
      }
    </BodyLayout>
  )
};

export default EvolveTo;