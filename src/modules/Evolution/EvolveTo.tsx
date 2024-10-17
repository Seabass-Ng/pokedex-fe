import { useQuery } from "@tanstack/react-query";
import type { Props, Result } from "./types";
import EvolveTemplate from "./EvolveTemplate";
import BodyLayout from "../BodyLayout/BodyLayout";

const EvolveTo = async ({
  pokemon
}: Props) => {
  const getEvolveTo = async (): Promise<Result[] | null> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pokemon/${pokemon.id}/evolveTo`)
    if (res.status === 204) {
      return null;
    }
    const result = await res.json();
    return result;
  }

  let data: Result[] | null = null;
  let error;
  try {
    data = await getEvolveTo();
  } catch (fetchError) {
    error = fetchError;
    console.error(error)
  }

  // const { data, error, isLoading } = useQuery<Result[] | null>({
  //   queryKey: 'getEvolveTo',
  //   queryFn: getEvolveTo,
  // });

  return (
    <BodyLayout error={error}>
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