import { InView } from "react-intersection-observer";

type Props = {
  onChange?: (inView: boolean) => void;
};

export const InViewObserver: React.FC<React.PropsWithChildren<Props>> = ({
  onChange,
  children,
}) => {
  return (
    <InView
      onChange={(inView) => {
        onChange?.(inView);
      }}
    >
      {children}
    </InView>
  );
};
