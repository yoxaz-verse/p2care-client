import ServiceCard from "@/components/Cards/ServiceCard";
import PageHeading from "@/components/Text/PageHeading";
import { serviceDigitalXRay } from "@/content/assets";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Spacer } from "@nextui-org/react";
import React from "react";

function List() {
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
