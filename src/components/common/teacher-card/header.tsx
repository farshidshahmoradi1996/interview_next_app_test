import { TeacherDto } from "@/@types";
import Image from "next/image";
import styles from "./styles.module.scss";

type Props = {
  data: TeacherDto;
};

export const TeacherCardHeader: React.FC<Props> = ({ data }) => {
  const fullName = `${data?.teacher?.firstname} ${data?.teacher?.lastname}`;

  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          className={styles.avatar}
          alt={fullName || " Teacher"}
          src={data?.avatar_url ?? "/user_default.png"}
          width={80}
          height={80}
        />
        <div className={styles.titleContainer}>
          <h3>{fullName}</h3>
          <p>{data?.top_categories?.[0]?.fa_name}</p>
        </div>
      </div>
    </div>
  );
};
