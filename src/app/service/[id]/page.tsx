import DepartmentCard from "@/components/Cards/DepartmentCard";
import DoctorDetailCard from "@/components/Cards/DoctorDetailCard";
import HospitalCard from "@/components/Cards/HospitalCard";
import DescriptionParagraph from "@/components/Text/DescriptionParas";
import TitleHeading from "@/components/Text/TitleHeading";
import { pediatrics, serviceXRay } from "@/Content/assets";
import { lorem150 } from "@/Content/dummyText";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Spacer } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

function Details() {
  return (
    <section>
      <Image
        src={serviceXRay}
        alt="Service Name"
        className=" object-cover h-[200px] md:h-[400px] w-full rounded-[30px]"
        width={1000}
        height={1000}
      />
      <Spacer y={3} />
      <TitleHeading heading="Digital X-Ray" />
      <Spacer y={3} />
      <DescriptionParagraph content={lorem150} />
      <Spacer y={3} />

      <TitleHeading heading="Doctors" />
      <Spacer y={3} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <DoctorDetailCard key={index}></DoctorDetailCard>
        ))}
      </div>
      <Spacer y={3} />
      <TitleHeading heading="Hopitals" />
      <Spacer y={3} />
      <div className="grid grid-cols-1  gap-5">
        {Array.from({ length: 3 }).map((_, index) => (
          <HospitalCard key={index} />
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center p-[2rem]">
          <h1 className="text-3xl font-bold text-blue-500">Departments</h1>
          <h1 className="text-blue-600 font-bold underline">View All</h1>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <DepartmentCard
              key={index}
              title="Pediatrics"
              icon={pediatrics}
              redirect={navigationRoutes.department + "pediatrics-id"}
            ></DepartmentCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Details;
