import styles from './EvolveStep.module.css';

type Props = {
  condition: string;
};

const EvolveStep = ({
  condition
}: Props) => {
  return (
    <div className={styles.evolveStep}>
      <span>{condition}</span>
      <span>&rarr;</span>
    </div>
  );
};

export default EvolveStep;