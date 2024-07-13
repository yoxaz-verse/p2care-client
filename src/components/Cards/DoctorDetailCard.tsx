import { apolloDoc } from "@/Content/assets";
import { Button, Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function DoctorDetailCard() {
  return (
    <Card className="grid w-full h-[300px] grid-cols-auto justify-between p-5 w-full hover:cursor-pointer hover:bg-primary-100">
      <div className="flex gap-5">
        <Image
          src={apolloDoc}
          alt="Doctor Name"
          className="w-[75px] h-[75px] rounded-full"
          width={1000}
          height={1000}
        />
        <div className="flex flex-col">
          <h5 className="font-[600] text-xl md:text-2xl">Dr. John Doe</h5>
          <p className="text-[10px] md:text-[20px]">Internal Medicine</p>
          <p className="text-[10px] md:text-[20px]">17 Years Exp</p>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center text-gray-500">
        <FaMapMarkerAlt size={20} />
        <h1 className="font-bold text-[12px]">Marine Drive, Mumbai (MH)</h1>
      </div>
      <div className="flex flex-row items-center gap-2 justify-self-end">
        <h1 className="text-red-400 text-md md:text-lg line-through font-semibold">Rs 649</h1>
        <h1 className="text-xl md:text-2xl font-bold">Rs 649</h1>
      </div>
      <div className="flex flex-row items-center gap-4 justify-self-end">
        <h1 className="text-[10px]">Know More</h1>
        <Button color="primary" radius="full">Consult Now</Button>
      </div>
    </Card>
  );
}

export default DoctorDetailCard;
