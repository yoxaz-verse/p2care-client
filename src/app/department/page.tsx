"use client";
import DepartmentCard from "@/components/Cards/DepartmentCard";
import PageHeading from "@/components/Text/PageHeading";
import { pediatrics } from "@/Content/assets";
import { getData } from "@/core/apiHandler";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Spacer } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function List() {
  const { data: getDepartment, isLoading } = useQuery({
    queryKey: ["getDepartment"],
    queryFn: () => {
      return getData("/department/get-all", {});
    }
  })
  console.log(getDepartment?.data?.data?.data);
  return (
    <section>
      <PageHeading heading="Departments" />
      <Spacer y={5} />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {getDepartment?.data?.data?.data.map((d: any, index: any) => (
          <DepartmentCard
            key={index}
            title={d?.name}
            icon={d?.image?.path}
            redirect={navigationRoutes.department + d._id}
          />
        ))}
      </div>
    </section>
  );
}

export default List;
