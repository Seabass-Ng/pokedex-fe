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
  const getMoves = async (): Promise<MoveItem[]> => {
    const res = await fetch(`${process.env.SERVER_URL}/pokemon/${pokemonId}/moves`, {
      mode: 'cors'
    })
    return res.json()
  }

  let data;
  let error;
  try {
    data = await getMoves();
  } catch (fetchError) {
    error = fetchError;
    console.error(error)
  }

  // const { data, error } = useQuery<Array<MoveItem>>({
  //   queryKey: 'getMoves',
  //   queryFn: getMoves,
  // });

  return (
    <BodyLayout
      error={error}
    >
      {data ? (
        <>
          <h3>Moves</h3>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>Level</th>
                <th className={styles.th}>Move</th>
                <th className={styles.th}>Type</th>
                <th className={styles.th}>Power</th>
                <th className={styles.th}>Accuracy</th>
                <th className={styles.th}>PP</th>
              </tr>
            </thead>
            <tbody>
              {data.map(move => (
                <tr className={styles.tr} key={move.name}>
                  <td className={styles.td}>{move.level}</td>
                  <td className={styles.td}>{move.name}</td>
                  <td className={styles.td}><TypeChip pokemonType={move.type} /></td>
                  <td className={styles.td}>{move.power ?? '--'}</td>
                  <td className={styles.td}>{move.accuracy}</td>
                  <td className={styles.td}>{move.pp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <div>Sorry, cannot get moves. Please try again later.</div>
      )}
    </BodyLayout>
  );
};

export default MoveTable;