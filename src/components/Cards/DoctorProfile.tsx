"use client";
import { NextPage } from "next";
import { doctor, doctors, maleDoctorCard } from "@/content/assets";
import { Button, Card, CardBody, Chip, Image } from "@nextui-org/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface DoctorProfileProps {
  title: any;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ title }) => {
  return (
    <>
      <Card className="flex flex-row justify-around w-full h-[110px] md:h-[270px]">
        <CardBody className="flex flex-row justify-between">
          <div className="flex flex-row h-full gap-2 md:gap-4">
            <img
              src={maleDoctorCard}
              className="w-[57px] h-[57px] h-full md:w-[160px] md:h-[160px] rounded-full"
            />
            <div className="flex flex-col h-full  justify-around">
              <div className="flex  w-full items-center gap-[1rem] flex-row">
                <h3 className="text-sm md:text-lg font-extrabold">
                  Dr Manish Sharma
                </h3>
                <div className="flex flex-row gap-2 md:gap-4 items-center">
                  <div className="w-1 md:w-2 h-1 md:h-2 bg-red-500 rounded-full" />
                  <p className="font-extrabold text-sm md:text-md text-red-500">
                    General Phyiscian
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 md:gap-4 items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <p className="font-extrabold text-[10px] md:text-md text-blue-500">
                  MA, MPhil, MBBS
                </p>
              </div>
              <div className="flex  items-center flex-row gap-2 md:gap-4">
                <FaMapMarkerAlt className="fill-gray-500" />
                <h3 className="text-[10px] md:text-md text-gray font-extrabold">
                  Marine Drive, Mumbai (MH)
                </h3>
              </div>
              <span className="bg-blue-500 text-white text-sm lg:text-md font-bold px-[5px] md:px-[10px] w-1/2 md:w-1/4 text-center py-[5px] rounded-full">
                {title}
              </span>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
