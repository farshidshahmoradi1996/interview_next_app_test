"use client";

import React from "react";
import { TeacherCard } from "@/components/common";
import { getTeacherSearchQueryKey, useSearchTeachers } from "@/services";
import { InViewObserver, Spinner } from "@/components";
import { useDidMountEffect } from "@/hooks";
import { getQueryClient } from "@/libs";
import { TeachersEmptyList } from "./empty-list";

type Props = {
  q: string;
};
export const TeachersList: React.FC<Props> = ({ q }) => {
  const queryClient = getQueryClient();
  const queryKey = getTeacherSearchQueryKey();

  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
    refetch,
  } = useSearchTeachers({ q });

  const handleOserverChange = (inView: boolean) => {
    // next page
    if (!inView) return;
    if (isFetchingNextPage) return;
    fetchNextPage();
  };

  useDidMountEffect(() => {
    // search teacher
    queryClient.setQueryData(queryKey, () => null);
    refetch();
  }, [q, refetch]);

  if (isRefetching && !isFetchingNextPage) return <Spinner center />;

  // empty list
  const isEmpty = data?.pages?.[0]?.data?.paginate?.total === 0;
  if (isEmpty) return <TeachersEmptyList />;

  return (
    <div>
      {data?.pages?.map((pageItem) => (
        <React.Fragment key={pageItem?.data?.paginate?.currentPage}>
          {pageItem?.data?.data?.map((teacher) => (
            <TeacherCard key={teacher?.id} data={teacher} />
          ))}
        </React.Fragment>
      ))}
      {hasNextPage && (
        <InViewObserver onChange={handleOserverChange}>
          <Spinner center />
        </InViewObserver>
      )}
    </div>
  );
};
