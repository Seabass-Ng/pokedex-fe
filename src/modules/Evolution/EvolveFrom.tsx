import { useQuery } from "@tanstack/react-query";
import EvolveTemplate from "./EvolveTemplate";
import type { Props, Result } from "./types";
import BodyLayout from "../BodyLayout/BodyLayout";

const EvolveFrom = async ({
  pokemon
}: Props) => {
  const getEvolveFrom = async (): Promise<Result | null> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/pokemon/${pokemon.id}/evolveFrom`)
    if (res.status === 204) {
      return null;
    }
    const result = await res.json();
    return result;
  }

  let data;
  let error;
  try {
    data = await getEvolveFrom();
  } catch (fetchError) {
    error = fetchError;
    console.error(error)
  }

  // const { data, error, isLoading } = useQuery<Result | null>({
  //   queryKey: 'getEvolveFrom',
  //   queryFn: getEvolveFrom,
  // });

  return (
    <BodyLayout
      error={error}
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