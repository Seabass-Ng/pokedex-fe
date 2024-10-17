'use client'
import BodyLayout from "../BodyLayout/BodyLayout";
import styles from './MoveTable.module.css';
import TypeChip from "../TypeChip/TypeChip";
import type { TYPES } from "../../types/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import classnames from "../../utils/classnames";

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

const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

const MoveTable = ({
  pokemonId
}: Props) => {
  const [showMoves, setShowMoves] = useState(true);

  const onExpand = () => setShowMoves((showMoves) => !showMoves);
  const getMoves = async (): Promise<MoveItem[]> => {
    const res = await fetch(`${NEXT_PUBLIC_SERVER_URL}/pokemon/${pokemonId}/moves`, {
      mode: 'cors'
    })
    return res.json()
  }

  const { data, error } = useQuery<Array<MoveItem>>({
    queryKey: ['getMoves', pokemonId],
    queryFn: getMoves,
  });

  return (
    <BodyLayout
      error={error}
    >
      {data ? (
        <>
          <h3>
            Moves
            <span
              className={classnames(styles.expand, showMoves ? styles.expanded : styles.hidden)}
              onClick={onExpand}
            />
          </h3>
          {showMoves && (
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
          )}
        </>
      ) : (
        <div>Sorry, cannot get moves. Please try again later.</div>
      )}
    </BodyLayout>
  );
};

export default MoveTable;