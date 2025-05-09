import clsx from "clsx";
import styles from "./styles.module.scss";

type Props = {
  label?: string;
  isLoading?: boolean; // handle loading late we don't have time right now :)
} & React.HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ label, ...rest }) => {
  return (
    <button {...rest} className={clsx(styles.button, rest.className)}>
      {label}
    </button>
  );
};
