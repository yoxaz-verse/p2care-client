import DepartmentCard from "@/components/Cards/DepartmentCard";
import PageHeading from "@/components/Text/PageHeading";
import { pediatrics } from "@/content/assets";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Spacer } from "@nextui-org/react";
import React from "react";

function List() {
  return (
    <section>
      <PageHeading heading="Departments" />
      <Spacer y={5} />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {Array.from({ length: 15 }).map((_, index) => (
          <DepartmentCard
            key={index}
            title="Pediatrics"
            icon={pediatrics}
            redirect={navigationRoutes.department + "pediatrics-id"}
          />
        ))}
      </div>
    </section>
  );
}

export default List;
