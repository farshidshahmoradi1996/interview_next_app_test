import clsx from "clsx";
import styles from "./styles.module.scss";

type Props = {
  center?: boolean;
};
export const Spinner: React.FC<Props> = ({ center }) => {
  return (
    <div className={clsx(center && styles.center, styles.container)}>
      <span className={styles.loader} />
    </div>
  );
};
