"use client";

import styles from "./styles.module.scss";

import { debounce } from "@/helpers";

type Props = {
  onQChange: (q: string) => void;
};
export const TopSearchBox: React.FC<Props> = ({ onQChange }) => {
  const submitWithDebounce = debounce((e) => {
    onQChange(e.target.value);
  }, 1000);

  return (
    <div className={styles.container}>
      <input onChange={submitWithDebounce} placeholder="جستجو ..." />
    </div>
  );
};
