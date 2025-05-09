"use client";
import { TeacherDto } from "@/@types";
import classes from "./styles.module.scss";
import { TeacherCardHeader } from "./header";
import clsx from "clsx";
import { TeacherTags } from "./tags";
import { Button } from "@/components";
import { useState } from "react";
import { TeacherVideoModal } from "./video-modal";

type Props = {
  data: TeacherDto;
};

export const TeacherCard: React.FC<Props> = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prv) => !prv);
  };

  return (
    <>
      <div className={clsx(classes.card, "fade-in")}>
        <TeacherCardHeader data={data} />
        <TeacherTags data={data} />
        <Button label="مشاهده ویديو معرفی" onClick={toggleModal} />
      </div>
      {showModal && <TeacherVideoModal onClose={toggleModal} data={data} />}
    </>
  );
};
