const fallback = "...";

export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_BASE_URL || fallback;
};
