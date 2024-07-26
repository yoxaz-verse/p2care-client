import { DoctorListCard } from "@/components/Cards/DoctorListCard";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Divider, Input, Spacer, Button } from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { IoFilterCircleOutline } from "react-icons/io5";

export default function DoctorPage() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col xl:flex-row justify-between  w-full p-[2rem]">
          <h3 className="text-lg font-bold text-[#3F8EFC]">
            Doctors Near You
          </h3>
          <div className="flex flex-row w-full xl:w-2/3  gap-4">
            <Input
              className="rounded-xl border-gray-400"
              placeholder="Search By Doctor Name, Speciality etc"
            />
            <Button className="bg-blue-500 rounded-full" isIconOnly>
              <FaSearch className="fill-white" />
            </Button>
            <Button className="rounded-full bg-white" isIconOnly>
              <IoFilterCircleOutline size={40} className="text-blue-500" />
            </Button>
          </div>
        </div>
        <Divider orientation="horizontal" />
        <Spacer y={2} />
        <div className="flex flex-col gap-2">
          {Array.from({ length: 12 }, (_, index) => (
            <DoctorListCard
              key={index}
              redirect={navigationRoutes.doctor + "1"}
            />
          ))}
        </div>
      </div>
    </>
  );
}
