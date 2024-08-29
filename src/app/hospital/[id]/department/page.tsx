"use client";
import HospitalCard2 from "@/components/Cards/HospitalCard2";
import DepartmentList from "@/components/Pages/Departments";
import { getData } from "@/core/apiHandler";
import { hospitalRoutes } from "@/core/apiRoutes";
import { navigationRoutes } from "@/core/navigationRoutes";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";


function List() {
  const { id } = useParams();
  const { data: getHospitals, isLoading } = useQuery({
    queryKey: ["getHospitals"],
    queryFn: () => {
      return getData(`${hospitalRoutes.hospital}/${id}`, {});
    },
  })
  return (
    <>
      <HospitalCard2 data={getHospitals?.data.data} />
      <DepartmentList
        title="Department List"
        hospitalId={id}
        redirect={navigationRoutes.hospital + `${id}/department`} />
    </>
  );
}

export default List;
