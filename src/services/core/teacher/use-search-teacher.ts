import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import {
  createSearchTeacherService,
  TeachersServiceProps,
} from "./search-teacher-options";

export const useSearchTeachers = (props?: TeachersServiceProps) => {
  return useSuspenseInfiniteQuery(createSearchTeacherService(props));
};
