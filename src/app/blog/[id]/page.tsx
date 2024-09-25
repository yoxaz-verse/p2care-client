"use client";
import DepartmentCard from "@/components/Cards/DepartmentCard";
import DoctorDetailCard from "@/components/Cards/DoctorDetailCard";
import HospitalCard from "@/components/Cards/HospitalCard";
import DescriptionParagraph from "@/components/Text/DescriptionParas";
import TitleHeading from "@/components/Text/TitleHeading";
import { pediatrics, serviceXRay } from "@/Content/assets";
import { lorem150 } from "@/Content/dummyText";
import { getData } from "@/core/apiHandler";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Spacer, Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

function Details() {
  const { id } = useParams();
  const { data: getService, isLoading } = useQuery({
    queryKey: ["getServices", id],
    queryFn: () => {
      return getData(`/blog/${id}`, {});
    },
  });
  return (
    <section>
      {isLoading ? (
        <div className="flex flex-col-reverse justify-center items-center h-[80vh]">
          <h3>Loading blog details...</h3>
          <Spinner title="Loadung Service Details..." />
        </div>
      ) : (
        <>
          <Image
            src={getService?.data?.data?.image?.path || serviceXRay}
            loading="lazy"
            alt="Service Name"
            className=" object-cover h-[200px] md:h-[400px] w-full rounded-[30px]"
            width={1000}
            height={1000}
          />
          <Spacer y={3} />
          <TitleHeading heading={getService?.data?.data?.title || "Service"} />
          <Spacer y={3} />
          <DescriptionParagraph
            content={getService?.data?.data?.description || lorem150}
          />
          <Spacer y={3} />
        </>
      )}
    </section>
  );
}

export default Details;
