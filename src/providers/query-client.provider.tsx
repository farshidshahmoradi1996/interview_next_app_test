import { QueryClientProvider as ReactQueryBuiltInQueryClientProvider } from "@tanstack/react-query";

import { getQueryClient } from "@/libs";

export const QueryClientProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const queryClient = getQueryClient();

  return (
    <ReactQueryBuiltInQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryBuiltInQueryClientProvider>
  );
};
