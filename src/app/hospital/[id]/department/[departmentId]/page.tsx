"use client";
import DoctorDetailCard from "@/components/Cards/DoctorDetailCard";
import HospitalCard from "@/components/Cards/HospitalCard";
import DescriptionParagraph from "@/components/Text/DescriptionParas";
import TitleHeading from "@/components/Text/TitleHeading";
import { getData } from "@/core/apiHandler";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Spacer, Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import { departmentFever } from "@/Content/assets";
import { lorem100 } from "@/Content/dummyText";

function DepartmentDetails() {
  const { departmentId: id } = useParams();

  const { data: getDepartment, isLoading } = useQuery({
    queryKey: ["getDepartment", id],
    queryFn: () => {
      return getData(`/department/test/user/${id}`, {});
    }
  })

  return (
    isLoading ? (
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
        </section>
      </>
    )
  );
}

export default DepartmentDetails;
