import { DoctorListCard } from "@/components/Cards/DoctorListCard";
import HospitalCard2 from "@/components/Cards/HospitalCard2";
import { Button, Input, Pagination } from "@nextui-org/react";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsFillFilterCircleFill } from "react-icons/bs";

function DoctorList() {
  return (
    <section className="grid gird-cols-auto w-full gap-[1rem]">
      <HospitalCard2 />
      <div className="flex flex-row w-full justify-between">
        <h1 className="text-blue-500 font-bold text-[36px]">Doctors</h1>
        <div className="flex flex-row w-full md:w-2/3 gap-4">
          <Input
            variant="bordered"
            className="border rounded-xl bg-white"
            placeholder="Search by Speciality etc"
          />
          <Button className="bg-blue-500 rounded-full" isIconOnly>
            <FaSearch className="fill-white" />
          </Button>
          <Button isIconOnly className="bg-white rounded-full">
            <BsFillFilterCircleFill size={30} className="fill-blue-500" />
          </Button>
        </div>
      </div>
      {Array.from({ length: 12 }, (_, index) => (
        <DoctorListCard key={index} />
      ))}
      <Pagination className="justify-self-center" total={5} initialPage={1} />
    </section>
  );
}

export default DoctorList;
