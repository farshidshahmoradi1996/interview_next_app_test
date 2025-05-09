"use client";
import { TopSearchBox } from "@/components/common";
import { TeachersList } from "./list";
import { useState } from "react";

export const TeachersPageContainer: React.FC = () => {
  const [q, setQ] = useState("");
  return (
    <>
      <TopSearchBox onQChange={setQ} />
      <TeachersList q={q} />
    </>
  );
};
