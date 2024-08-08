"use client";
import ServiceCard from "@/components/Cards/ServiceCard";
import PageHeading from "@/components/Text/PageHeading";
import { serviceDigitalXRay } from "@/Content/assets";
import { getData } from "@/core/apiHandler";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Spacer, Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import isAuth from "../isAuth";

function List() {

  const { data: getService, isLoading } = useQuery({
    queryKey: ["getServices"],
    queryFn: () => {
      return getData(`/service/get-all/`, {});
    }
  })

  return (
    <section>
      <PageHeading heading="Services" />
      <Spacer y={5} />
      {isLoading ? <div className="flex flex-col justify-center items-center h-[60vh]">
        <Spinner color="primary" />
        <h1>Loading Services</h1>
      </div> : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {getService?.data?.data?.data.map((d: any, index: any) => (
              <ServiceCard
                key={index}
                title={d?.title}
                image={d?.image?.path}
                redirect={navigationRoutes.service + d._id}
              />
            ))}
          </div>
        </>)}
    </section>
  );
}

export default List;
