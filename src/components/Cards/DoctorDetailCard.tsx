"use client";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

interface DoctorProps {
  data: any;
  redirect?: any;
}

function DoctorDetailCard({ data, redirect }: DoctorProps) {
  const router = useRouter();
  return (
    <Card className="flex  h-[145px]  md:h-[200px] lg:h-[300px] w-full m-0 p-4 flex-col justify-between md:p-5 w-full hover:cursor-pointer hover:bg-primary-100">
      <div className="flex gap-2">
        <Image
          src={data?.image?.path}
          alt="Doctor Name"
          className="w-[35px] md:w-[60px] lg:w-[75px] h-[35px] md:h-[60px] lg:h-[75px] rounded-full"
          width={1000}
          height={1000}
        />
        <div className="flex flex-col">
          <h5 className="font-[500] text-sm md:text-md lg:text-[21px]">{data.name}</h5>
          <p className="text-[7px] md:text-[12px] lg:text-md">{data.designation.name}</p>
          <p className="text-[7px] md:text-[12px] lg:text-md">{data.experience} Years Exp</p>
        </div>
      </div>
      <div className="flex flex-row gap-2 text-[6px] md:text-[12px]  lg:text-md  justify-center items-center text-[#3C4959]">
        <FaMapMarkerAlt className="fill-[#3C4959]" />
        <h1 className="font-bold">{data.address}</h1>
      </div>
      <div className="flex flex-row items-center gap-2 justify-end">
        <h1 className="text-red-400 text-[7px] md:text-[10px] lg:text-md line-through font-semibold">
          Rs {data.price}
        </h1>
        <h1 className="text-md lg:text-lg font-bold">Rs {data.price}</h1>
      </div>
      <div className="flex flex-row items-center gap-2 md:gap-4 justify-end w-full">
        <h1 className="text-sm md:text-[10px] text-[#3C4959]">Know More</h1>
        <button
          color="primary"
          onClick={() => router.push(redirect)}
          className="text-sm px-2 py-1  p-0 md:p-1 lg:p-2 rounded-full font-bold text-white bg-primary md:text-[10px] lg:text-md"
        >
          Consult Now
        </button>
      </div>
    </Card>
  );
}

export default DoctorDetailCard;
