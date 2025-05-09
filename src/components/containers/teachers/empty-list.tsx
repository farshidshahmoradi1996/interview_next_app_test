import styles from "./styles.module.scss";

export const TeachersEmptyList: React.FC = () => {
  return (
    <div className={styles.emptyListContainer}>
      متاسفانه هیچ معلمی پیدا نشد :(
    </div>
  );
};
