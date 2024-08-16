"use client";
import DoctorDetailCard from "@/components/Cards/DoctorDetailCard";
import { DoctorListCard } from "@/components/Cards/DoctorListCard";
import HospitalCard from "@/components/Cards/HospitalCard";
import DescriptionParagraph from "@/components/Text/DescriptionParas";
import TitleHeading from "@/components/Text/TitleHeading";
import { departmentFever } from "@/Content/assets";
import { lorem100 } from "@/Content/dummyText";
import { getData } from "@/core/apiHandler";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Spacer, Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

function Details() {
  const { departmentid: id } = useParams();
  const { data: getDepartment, isLoading } = useQuery({
    queryKey: ["getDepartment", id],
    queryFn: () => {
      return getData(`/department/test/user/${id}`, {});
    }
  })
  const { data: getHospitals, isLoading: isLoadingHospital } = useQuery({
    queryKey: ["getHospitals", id],
    queryFn: () => {
      return getData(`/hospital-department/get-hospital/${id}`, {});
    }
  })
  const { data: getDoctors, isLoading: isLoadingDoctors } = useQuery({
    queryKey: ["getDoctors", id],
    queryFn: () => {
      return getData(`/doctor/get-all-doctors/${id}`, {});
    }
  })

  return (
    isLoading || isLoadingHospital || isLoadingDoctors ? (
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <Spinner />
        <h3>Loading Department Details..</h3>
      </div>
    ) : (
      <>
        <section>
          <Image
            src={getDepartment?.data?.data?.image?.path || departmentFever}
            alt="Service Name"
            className=" object-cover h-[200px] md:h-[400px] w-full rounded-[30px]"
            width={1000}
            height={1000}
          />
          <Spacer y={3} />
          <TitleHeading heading={getDepartment?.data?.data?.name} />
          <Spacer y={3} />
          <DescriptionParagraph content={getDepartment?.data?.data?.description || lorem100} />
          <Spacer y={3} />
          <div className="flex flex-row justify-between items-center">
            <TitleHeading heading="Doctors" />
            <h3 className="text-sm md:text-md underline text-blue-400 font-bold">
              View All
            </h3>
          </div>
          <Spacer y={3} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {getDoctors?.data?.data.map((d: any, index: any) => {
              return <DoctorDetailCard
                key={index}
                data={d}
                redirect={navigationRoutes.doctor + "/doctor" + d._id}
              />
            })}
          </div>
          <Spacer y={3} />
          <div className="flex flex-row justify-between items-center">
            <TitleHeading heading="Hospitals" />
            <h3 className="text-sm md:text-md underline text-blue-400 font-bold">
              View All
            </h3>
          </div>
          {getHospitals?.data?.data?.map((data: any, index: any) => (
            <HospitalCard data={data} key={index} redirect={`${navigationRoutes.service}/department/${data._id}`} />
          ))}
        </section>
      </>
    )
  );
}

export default Details;
