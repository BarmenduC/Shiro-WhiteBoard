"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";

interface DashboardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
};

const DashboardPage = ({
     searchParams,
     }: DashboardPageProps) => {
  const { organization } = useOrganization();

  return (
    <div className="flex flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
      <EmptyOrg />
      ) : (
      <p>
        <BoardList
            orgId = {organization.id}
            query = {searchParams}
        />
      </p>
      )}
    </div>
  );
};

export default DashboardPage;
