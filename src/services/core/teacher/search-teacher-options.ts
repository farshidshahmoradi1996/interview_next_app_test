import { TeachersSearchCoreApiResponse } from "@/@types";
import { CORE_API_ENDPOINTS } from "@/constants";
import { generateUrlSearchParams, getNextPageParam } from "@/helpers";
import { infiniteQueryOptions } from "@tanstack/react-query";

export const getTeacherSearchQueryKey = () => ["core", "teachers", "core"];

export type TeachersServiceProps = { q?: string | undefined | null };

export const createSearchTeacherService = (props?: TeachersServiceProps) =>
  infiniteQueryOptions<TeachersSearchCoreApiResponse>({
    queryKey: getTeacherSearchQueryKey(),
    getNextPageParam: (lastPageResponse) =>
      getNextPageParam(lastPageResponse?.data?.paginate),
    initialPageParam: 1,
    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        generateUrlSearchParams(CORE_API_ENDPOINTS.TEACHERS.SEARCH, {
          page: pageParam || 1,
          ...(props?.q && { teacher: props.q }),
        })
      );
      return response.json();
    },
  });
