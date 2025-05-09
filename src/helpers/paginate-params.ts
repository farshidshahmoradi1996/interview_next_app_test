import { PaginateInfo } from "@/@types";

export const getNextPageParam = (
  paginateInfo?: PaginateInfo
): undefined | number => {
  if (!paginateInfo) return undefined;
  const current = Number(paginateInfo?.currentPage);
  const last = Number(paginateInfo?.lastPage);
  if (last > current) return current + 1;
  return undefined;
};
