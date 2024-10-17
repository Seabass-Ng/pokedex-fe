import { useQuery } from "@tanstack/react-query";
import BodyLayout from "../BodyLayout/BodyLayout";
import styles from './MoveTable.module.css';
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

const MoveTable = async ({
  pokemonId
}: Props) => {
  const getMoves = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/pokemon/${pokemonId}/moves`)
    return res.json()
  }

  const { data, error } = useQuery<Array<MoveItem>>({
    queryKey: 'getMoves',
    queryFn: getMoves,
  });

  return (
    <BodyLayout
      error={error}
    >
      {data ? (
        <>
          <h3>Moves</h3>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th className={styles.td}>Level</th>
              <th className={styles.td}>Move</th>
              <th className={styles.td}>Type</th>
              <th className={styles.td}>Power</th>
              <th className={styles.td}>Accuracy</th>
              <th className={styles.td}>PP</th>
            </tr>
            {data.map(move => (
              <tr className={styles.tr} key={move.id}>
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