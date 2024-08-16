"use client";
import { useRouter } from "next/navigation";
import { hospitalLogo } from "@/Content/assets";
import { isMobile } from "@/Utils/screenSize";
import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaWheelchair } from "react-icons/fa6";
import { IoMdCall, IoMdCar } from "react-icons/io";

function HospitalCard2({ data }: any) {
  const router = useRouter();
  return (
    <Card>
      <CardBody className="flex flex-row gap-10">
        <Image
          src={data?.image?.path || hospitalLogo}
          alt="hospital"
          width={1000}
          height={1000}
          className="w-[80px] h-[80px] lg:w-[220px] lg:h-[220px] rounded-full"
        />
        <div className="grid grid-rows-1 md:grid-rows-2 w-full">
          <h2 className="font-[700] text-[18px] lg:text-[44px] ">
            {data.name}
          </h2>
          <h3 className="font-[700] text-[12px] md:text-[24px] items-start md:items-center">
            {data?.district?.name},{data?.city?.name}
          </h3>
          <div className="flex flex-row flex-wrap items-start md:items-center text-[10px] md:text-md font-[500] gap-2 md:gap-4">
            <h3 className="flex flex-row items-center gap-2">
              <span className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-black" />
              {data.noOfBeds} Beds
            </h3>
          </div>
          <div className="justify-self-end">
            <Card
              isPressable
              onPress={() => router.push("/doctor/12/booking")}
              className="flex flex-row items-center text-[10px] md:text-[16px] p-1 md:p-3 px-3 md:px-6 rounded-full bg-primary text-white"
            >
              <IoMdCall /> {data.phone}
            </Card>
          </div>
        </div>
      </CardBody>
    </Card >
  );
}

export default HospitalCard2;
