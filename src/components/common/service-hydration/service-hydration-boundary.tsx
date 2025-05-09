import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

type Props = {
  queryClient: QueryClient;
};

export const ServiceHydrationBoundary: React.FC<PropsWithChildren<Props>> = ({
  children,

  queryClient,
}) => {
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};
