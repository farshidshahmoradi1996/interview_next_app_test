"use client";
import { QueryClientProvider } from "./query-client.provider";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <QueryClientProvider>{children}</QueryClientProvider>;
};
