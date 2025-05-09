import { TeacherDto } from "@/@types";
import styles from "./styles.module.scss";
type Props = {
  data: TeacherDto;
};

export const TeacherTags: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles.tagsContainer}>
      {data?.lessons?.map((lesson) => (
        <div className={styles.item} key={lesson?.id}>
          {lesson?.name}
        </div>
      ))}
    </div>
  );
};
