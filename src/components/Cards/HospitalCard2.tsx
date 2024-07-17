import { hospitalLogo } from "@/Content/assets";
import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaWheelchair } from "react-icons/fa6";
import { IoMdCall, IoMdCar } from "react-icons/io";

function HospitalCard2() {
  return (
    <Card>
      <CardBody className="flex flex-row gap-10">
        <Image
          src={hospitalLogo}
          alt="hospital"
          width={1000}
          height={1000}
          className="w-[80px] h-[80px] lg:w-[220px] lg:h-[220px] rounded-full"
        />
        <div className="grid grid-rows-1 md:grid-rows-2 w-full">
          <h2 className="font-[700] text-[18px] lg:text-[44px] ">
            Apollo Spectra Hospital
          </h2>
          <h3 className="font-[700] text-[12px] md:text-[24px] items-start md:items-center">
            Mumbai City
          </h3>
          <div className="flex flex-row flex-wrap items-start md:items-center text-sm md:text-md font-[500] gap-2 md:gap-4">
            <h3>Multi-Speciality Hospital</h3>
            <h3 className="flex flex-row items-center gap-2">
              <span className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-black" />
              Established 2016
            </h3>
            <h3 className="flex flex-row items-center gap-2">
              <span className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-black" />
              60 Beds
            </h3>
            <h3 className="flex flex-row items-center gap-2">
              <span className="w-1 md:w-2 h-1 md:h-2  rounded-full bg-black" />
              10 Doctors
            </h3>
          </div>
          <div className="flex flex-row text-sm md:text-md  gap-2 items-center">
            <FaWheelchair size={20} />
            <h3>Wheelchair accessibility available</h3>
          </div>
          <div className="justify-self-end">
            <Button
              radius="full"
              className="flex flex-row gap-2 text-[8px] lg:text-md py-0 font-[500] bg-primary text-white"
              color="primary"
              startContent={<IoMdCall />}
            >
              +91 0987654321
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default HospitalCard2;
