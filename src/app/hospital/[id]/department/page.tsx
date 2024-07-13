import DepartmentCard from "@/components/Cards/DepartmentCard";
import HospitalCard2 from "@/components/Cards/HospitalCard2";
import PageHeading from "@/components/Text/PageHeading";
import { pediatrics } from "@/Content/assets";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Spacer, Input, Button } from "@nextui-org/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsFillFilterCircleFill } from "react-icons/bs";

function DepartmentList() {
  return <>
    <HospitalCard2 />
    <div className="flex flex-col md:flex-row w-full justify-between items-center">
      <PageHeading heading="Departments" />
      <div className="flex flex-row w-full md:w-1/3 gap-4">
        <Input
          variant="bordered"
          className="border rounded-xl bg-white"
          placeholder="Search Doctor by Speciality etc"
        />
        <Button className="bg-blue-500 rounded-full" isIconOnly>
          <FaSearch className="fill-white" />
        </Button>
        <Button isIconOnly className="bg-white rounded-full">
          <BsFillFilterCircleFill size={30} className="fill-blue-500" />
        </Button>
      </div>
    </div>
    <Spacer y={5} />
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
      {Array.from({ length: 15 }).map((_, index) => (
        <DepartmentCard
          key={index}
          title="Pediatrics"
          icon={pediatrics}
          redirect={navigationRoutes.department + "pediatrics-id"}
        ></DepartmentCard>
      ))}
    </div>
  </>;
}

export default DepartmentList;
