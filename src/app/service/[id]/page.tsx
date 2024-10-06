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
      return getData(`/service/get-all/${id}`, {});
    },
  });
  return (
    <section>
      {isLoading ? (
        <div className="flex flex-col-reverse justify-center items-center h-[80vh]">
          <h3>Loading service details...</h3>
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
          <div className="flex gap-5  text-center justify-between">
            <TitleHeading
              heading={getService?.data?.data?.title || "Service"}
            />
            <div className="text-end">
              <h2 className="text-[24px]">
                Offer Price : {getService?.data?.data?.offerPrice}
              </h2>
              <h3 className="text-md line-through ">
                Price : {getService?.data?.data?.price}
              </h3>
            </div>
          </div>
          <Spacer y={3} />
          <DescriptionParagraph
            content={getService?.data?.data?.description || lorem150}
          />
          <Spacer y={3} />

          <TitleHeading heading="Doctors" />
          <Spacer y={3} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {getService?.data.data.doctors.map((d: any, index: any) => (
              <DoctorDetailCard
                redirect={`${navigationRoutes.service}/${id}/doctor/${d._id}`}
                data={d}
                key={index}
              />
            ))}
          </div>
          <Spacer y={3} />
          <TitleHeading heading="Hopitals" />
          <Spacer y={3} />
          <div className="grid grid-cols-1  gap-5">
            {getService?.data?.data?.hospitals?.map((d: any, index: any) => (
              <HospitalCard
                data={d}
                key={index}
                redirect={`${navigationRoutes.service}/${id}/${d._id}`}
              />
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between items-center py-[2rem]">
              <TitleHeading heading="Departments" />
              <h1 className="text-blue-600 font-bold underline">View All</h1>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-5">
              {/* {getService?.data?.data?.departments.map((d: any, index: any) => (
                <DepartmentCard
                  key={index}
                  title={d?.name}
                  icon={d?.image.path}
                  redirect={`${navigationRoutes?.service}/${id}/department/${d._id}`}
                />
              ))} */}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Details;
