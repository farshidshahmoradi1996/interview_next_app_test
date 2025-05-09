import { TeacherDto } from "@/@types";
import { Button, Modal } from "@/components";
import styles from "./styles.module.scss";

type Props = {
  onClose: VoidFunction;
  data?: TeacherDto;
};

export const TeacherVideoModal: React.FC<Props> = ({ onClose, data }) => {
  return (
    <Modal onClose={onClose} bottomSheet>
      <div className={styles.videoContainer}>
        <video height={400} width={"100%"} autoPlay controls>
          <source src={data?.video_url} />
        </video>
        <Button onClick={onClose} label="بستن" className={styles.videoClose} />
      </div>
    </Modal>
  );
};
