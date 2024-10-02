import { useQuery } from "react-query";
import BodyLayout from "../BodyLayout/BodyLayout";
import './MoveTable.module.css';
import TypeChip from "../TypeChip/TypeChip";
import type { TYPES } from "../../types/types";

type Props = {
  pokemonId: number;
};

type MoveItem = {
  name: string;
  pp: number;
  accuracy: number;
  type: TYPES;
  power?: number;
  level: number;
}

const MoveTable = ({
  pokemonId
}: Props) => {
  const getMoves = async () => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/pokemon/${pokemonId}/moves`)
    return res.json()
  }

  const { data, error, isLoading } = useQuery<Array<MoveItem>>({
    queryKey: 'getMoves',
    queryFn: getMoves,
  });

  return (
    <BodyLayout
      error={error}
      isLoading={isLoading}
    >
      {data ? (
        <>
          <h3>Moves</h3>
          <table>
            <tr>
              <th>Level</th>
              <th>Move</th>
              <th>Type</th>
              <th>Power</th>
              <th>Accuracy</th>
              <th>PP</th>
            </tr>
            {data.map(move => (
              <tr>
                <td>{move.level}</td>
                <td>{move.name}</td>
                <td><TypeChip pokemonType={move.type} /></td>
                <td>{move.power ?? '--'}</td>
                <td>{move.accuracy}</td>
                <td>{move.pp}</td>
              </tr>
            ))}
          </table>
        </>
      ) : (
        <div>Sorry, cannot get moves. Please try again later.</div>
      )}
    </BodyLayout>
  );
};

export default MoveTable;