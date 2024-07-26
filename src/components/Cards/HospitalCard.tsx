"use client";
import React from "react";
import { Card, CardBody, Spacer, Image } from "@nextui-org/react";
import { apolloLogo, apolloDoc } from "@/Content/assets";
import { HiLocationMarker } from "react-icons/hi";
import { CiClock2 } from "react-icons/ci";
import { useRouter } from "next/navigation";

function DocHospital() {
  return (
    <>
      <Card>
        <CardBody className="flex flex-row gap-4 w-full">
          <img
            src={apolloDoc}
            className="w-[40px] md:w-[80px] rounded-full h-[40px] md:h-[80px]"
            alt="apolloDoc"
          />
          <div className="flex flex-col gap-2">
            <h3 className="font-extrabold text-md">Hamza Ali</h3>
            <p className="text-sm md:text-md">Internal Medicine</p>
            <p className="text-sm md:text-md">17 Years experience</p>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

const HospitalCard = () => {
  const router = useRouter();
  return (
    <Card>
      <CardBody className="flex flex-col h-full">
        <div className="flex flex-row gap-4">
          <Image
            src={apolloLogo}
            className="h-[100px] md:h-[160px] lg:h-[220px] w-[100px] md:w-[160px] lg:w-[220px] rounded-full"
            alt="image"
          />
          <div className="flex flex-col justify-between gap-4">
            <h3 className="text-md md:text-[24px] lg:text-lg font-extrabold">
              Apollo Spectra Hospital
            </h3>
            <div className="flex flex-row w-full gap-4">
              <h3 className="text-sm  text-blue-500 font-bold md:text-[15px] lg:text-md">
                Multi-specialty Hospital
              </h3>
              <div className="flex flex-row font-bold text-sm md:text-[12px] lg:text-md  items-center text-blue-500">
                <HiLocationMarker className="fill-blue-500" />
                <h3>Mumbai City</h3>
              </div>
            </div>
            <div className="flex flex-row gap-2 justify-between">
              <h3 className="text-sm md:text-md">
                <span className="font-extrabold">₹ 300 - ₹700</span>{" "}
                Consultation Fees
              </h3>
            </div>
            <div className="flex flex-row w-full text-sm md:text-md flex-wrap font-bold text-md gap-2 md:gap-4">
              <h3>10 Specialities</h3>
              <div className="flex flex-row gap-2 items-center">
                <div className="w-1 md:w-2 h-1 md:h-2 bg-black rounded-full" />
                <p>10 Doctors</p>
              </div>
            </div>
            <Spacer y={2} />
          </div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex gap-2 md:gap-4 text-sm md:text-[15px]  lg:text-[20px] font-bold  items-center flex-row">
            <CiClock2 />
            <h3>MON-SUN 9:00AM-9:00PM</h3>
          </div>
          <div className="flex flex-row items-center gap-2">
            <h3 className="text-sm md:text-md cursor-pointer">Know More</h3>
            <button
              onClick={() => router.push("/hospital/12")}
              className="bg-blue-500 text-sm md:text-md rounded-full px-[10px] py-[5px] text-white font-bold"
            >
              Consult Now
            </button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default HospitalCard;
