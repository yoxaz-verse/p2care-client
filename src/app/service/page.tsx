"use client";
import ServiceCard from "@/components/Cards/ServiceCard";
import PageHeading from "@/components/Text/PageHeading";
import { serviceDigitalXRay } from "@/Content/assets";
import { getData } from "@/core/apiHandler";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Spacer } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";

function List() {
  const { id } = useParams();
  const { data: getService, isLoading } = useQuery({
    queryKey: ["getServices"],
    queryFn: () => {
      return getData(`/services/get-all/`, {});
    }
  })
  return (
    <section>
      <PageHeading heading="Services" />
      <Spacer y={5} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.from({ length: 15 }).map((_, index) => (
          <ServiceCard
            key={index}
            title="Digital X Ray"
            image={serviceDigitalXRay}
            redirect={navigationRoutes.service + "digital-x-ray-id"}
          />
        ))}
      </div>
    </section>
  );
}

export default List;
