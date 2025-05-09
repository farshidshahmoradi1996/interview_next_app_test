"use client";
import type { ReactNode } from "react";
import styles from "./styles.module.scss";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

interface PortalProps {
  children?: ReactNode;
  onBackDropClick?: () => void;
  className?: string;
}

export const Portal = (props: PortalProps) => {
  const ref = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal");
    setMounted(true);
  }, []);

  return mounted && ref.current
    ? createPortal(
        <div
          className={clsx(styles.container, "fade-in")}
          onClick={(e) => {
            e.stopPropagation();
            props.onBackDropClick?.();
          }}
        >
          {props.children}
        </div>,
        ref.current
      )
    : null;
};
