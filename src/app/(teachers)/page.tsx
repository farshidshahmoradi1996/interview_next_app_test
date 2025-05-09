import { getQueryClient } from "@/libs";

import { createSearchTeacherService } from "@/services";

import { ServiceHydrationBoundary, TeachersPageContainer } from "@/components";

export const dynamic = "force-dynamic";

export default async function Home() {
  const queryClient = getQueryClient();

  void queryClient.prefetchInfiniteQuery(createSearchTeacherService());

  return (
    <ServiceHydrationBoundary queryClient={queryClient}>
      <TeachersPageContainer />
    </ServiceHydrationBoundary>
  );
}
