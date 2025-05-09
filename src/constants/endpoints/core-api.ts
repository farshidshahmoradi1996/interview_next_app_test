import { getBaseUrl } from "./get-base-url";

const baseUrl = getBaseUrl();

export const CORE_API_ENDPOINTS = {
  TEACHERS: {
    SEARCH: `${baseUrl}/core/search/teacher`,
  },
} as const;
