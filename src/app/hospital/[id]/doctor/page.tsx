"use client";
import { DoctorListCard } from "@/components/Cards/DoctorListCard";
import HospitalCard2 from "@/components/Cards/HospitalCard2";
import { Button, Input, Pagination, Spinner } from "@nextui-org/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { getData } from "@/core/apiHandler";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { navigationRoutes } from "@/core/navigationRoutes";
import { hospitalRoutes } from "@/core/apiRoutes";

function DoctorList() {
  const { id } = useParams();
  const { data: getDoctors, isLoading: isLoadingDoctors } = useQuery({
    queryKey: ["getDoctors", id],
    queryFn: () => {
      return getData(`/hospital-doctor/get-doctors/${id}`, {});
    }
  })
  const [page, setPage] = useState<any>(0);
  const { data: getHospitals, isLoading } = useQuery({
    queryKey: ["getHospitals"],
    queryFn: () => {
      return getData(`${hospitalRoutes.hospital}/${id}`, {});
    },
  })
  return (
    isLoadingDoctors || isLoading ? <div className="flex flex-col items-center justify-center h-[80vh]">
      <Spinner />
      <h3>Loading Doctor Details</h3>
    </div> : (
      <section className="grid gird-cols-auto w-full gap-[1rem]">
        <HospitalCard2 data={getHospitals?.data.data} />
        <div className="flex flex-row w-full justify-between">
          <h3 className="text-blue-500 font-bold text-[36px]">Doctors</h3>
          {/* <div className="flex flex-row w-full md:w-1/3 gap-4">
            <Input
              className="rounded-xl bg-white"
              placeholder="Search by Speciality etc"
            />
            <Button className="bg-blue-500 rounded-full" isIconOnly>
              <FaSearch className="fill-white" />
            </Button>
            <Button isIconOnly className="bg-white rounded-full">
              <BsFillFilterCircleFill size={30} className="fill-blue-500" />
            </Button>
          </div> */}
        </div>
        {getDoctors?.data.data.map((d: any, index: any) => {
          return <DoctorListCard
            key={index}
            data={d}
            redirect={navigationRoutes.hospital + `/${id}/doctor/` + d._id}
          />

        })}

        <Pagination
          className="justify-self-center"
          total={getDoctors?.data?.data?.totalCount}
          initialPage={page} />
      </section>
    )
  );
}

export default DoctorList;
