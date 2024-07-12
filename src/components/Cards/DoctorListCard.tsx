import { NextPage } from "next";
import { doctor, doctors, maleDoctorCard } from "@/Content/assets";
import { Button, Card, CardBody, Chip, Image } from "@nextui-org/react";
import { FaMapMarkerAlt } from "react-icons/fa";

export const DoctorListCard: React.FC<any> = () => {
  return (
    <>
      <Card className="flex flex-row justify-around w-full h-[110px] md:h-[270px]">
        <CardBody className="flex flex-row justify-between">
          <div className="flex flex-row h-full gap-2 md:gap-4">
            <img src={maleDoctorCard} className="w-[57px] h-[57px] h-full md:w-[220px] md:h-[220px] rounded-full" />
            <div className="flex flex-col h-full  justify-around">
              <div className="flex  w-full items-center gap-[1rem] flex-row">
                <h1 className="text-[10px] md:text-3xl font-extrabold">Dr Manish Sharma</h1>
                <div className="flex flex-row gap-2 md:gap-4 items-center">
                  <div className="w-1 md:w-2 h-1 md:h-2 bg-red-500 rounded-full" />
                  <p className="font-extrabold text-[10px] md:text-lg text-red-500">General Phyiscian</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 md:gap-4 items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <p className="font-extrabold text-[10px] md:text-lg text-blue-500">MA, MPhil, MBBS</p>
              </div>
              <div className="flex text-gray-400 items-center flex-row gap-2 md:gap-4">
                <FaMapMarkerAlt />
                <h1 className="text-[10px] md:text-lg font-extrabold">Marine Drive, Mumbai (MH)</h1>
              </div>
              <p className="text-[10px] md:text-xl p-0 md:p-2 bg-[#8ED2CF] text-white text-center font-bold rounded-full w-2/3">15 years experinced</p>
            </div>
          </div>
          <div className="flex flex-col text-center justify-around h-full items-end">
            <h1 className="text-xl md:text-5xl font-extrabold">₹ 649</h1>
            <h1 className="text-red-400 line-through  font-bold text-sm md:text-3xl">₹ 649</h1>
            <h1 className="text-[5px] md:text-lg text-[#3C4959] text-right">Consultation fee at clinic</h1>
            <div className="flex flex-row justify-around items-center gap-2 md:gap-4">
              <h1 className="text-gray-600 text-[8px]  md:text-sm">Know More</h1>
              <button className="text-[7px] bg-blue-500 px-[2px] md:px-[25px] py-[0px] md:py-[10px] rounded-full md:text-lg text-white font-bold">Consult Now</button>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  )
}
