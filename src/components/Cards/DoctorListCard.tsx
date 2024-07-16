"use client"
import { NextPage } from "next";
import { doctor, doctors, maleDoctorCard } from "@/Content/assets";
import { Button, Card, CardBody, Chip } from "@nextui-org/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const DoctorListCard: React.FC<any> = () => {
  const router = useRouter();
  return (
    <>
      <Card className="flex flex-row justify-around w-full h-[110px] md:h-[270px]">
        <CardBody className="flex flex-row justify-between">
          <div className="flex flex-row h-full gap-2 md:gap-4">
            <Image
              src={maleDoctorCard}
              width={10000}
              height={1000}
              alt="male doc"
              className="w-[57px] h-[57px] md:w-[220px] md:h-[220px] rounded-full"
            />
            <div className="flex flex-col h-full  justify-between">
              <div className="flex  w-full items-center gap-[.3rem] md:gap-[1rem] flex-row">
                <h3 className="text-[11px] md:text-lg font-extrabold">
                  Dr Manish Sharma
                </h3>
                <div className="flex flex-row gap-1 md:gap-4 items-center">
                  <div className="w-1 md:w-2 h-1 md:h-2 bg-red-500 rounded-full" />
                  <p className="font-extrabold text-[6px] md:text-md text-red-500">
                    General Phyiscian
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-2 md:gap-4 items-center">
                <div className="w-1 md:w-2 h-1 md:h-2 bg-blue-500 rounded-full" />
                <p className="font-extrabold text-[6px] md:text-md text-blue-500">
                  MA, MPhil, MBBS
                </p>
              </div>
              <div className="flex text-sm md:text-md   items-center flex-row gap-2 md:gap-4">
                <FaMapMarkerAlt className="fill-gray-500" />
                <h3 className="text-gray font-extrabold">
                  Marine Drive, Mumbai (MH)
                </h3>
              </div>
              <p className="text-sm md:text-md p-0 md:p-2 bg-[#8ED2CF] text-white text-center font-bold rounded-full w-2/3">
                15 years experinced
              </p>
            </div>
          </div>
          <div className="flex flex-col text-center justify-around h-full items-end">
            <h3 className="text-md md:text-xl font-extrabold">₹ 649</h3>
            <h3 className="text-red-400 line-through  font-bold text-sm md:text-lg">
              ₹ 649
            </h3>
            <h3 className="text-[5px] md:text-md text-[#3C4959] text-right">
              Consultation fee at clinic
            </h3>
            <div className="flex flex-row justify-around items-center gap-2 md:gap-4">
              <h3 className="text-gray-600 text-[8px]  md:text-md">
                Know More
              </h3>
              <button onClick={() => router.push('/doctor/12')} className="text-sm bg-blue-500 px-[2px] md:px-[25px] py-[2px] md:py-[10px] rounded-full md:text-md text-white font-bold">
                Consult Now
              </button>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};
