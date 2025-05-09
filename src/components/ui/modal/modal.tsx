"use client";
import type { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";

import { Portal } from "../portal/portal";

type Props = {
  onClose?: () => void;
  className?: string;
  bottomSheet?: boolean;
};

export const Modal: FC<PropsWithChildren<Props>> = ({ children, onClose }) => {
  return (
    <Portal onBackDropClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className={styles.container}>
        {children}
      </div>
    </Portal>
  );
};
