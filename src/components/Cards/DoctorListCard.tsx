import { NextPage } from "next";
import { doctor, doctors, maleDoctorCard } from "@/Content/assets";
import { Button, Card, CardBody, Chip, Image } from "@nextui-org/react";
import { FaMapMarkerAlt } from "react-icons/fa";

export const DoctorListCard: React.FC<any> = () => {
  return (
    <>
      <Card className="flex flex-row justify-around w-full h-[25vh]">
        <CardBody className="flex flex-row overflow-hidden justify-between">
          <div className="flex gap-4 flex-row h-full">
            <img src={maleDoctorCard} className="rounded-full" />
            <div className="flex justify-around flex-col">
              <div className="flex flex-row items-center justify-around">
                <h1 className="font-extrabold text-md md:text-4xl">Dr Manish Sharma</h1>
                <Chip variant="dot" color="danger" className="text-xl md:text-2xl text-red-500 font-bold border-none">General Physician</Chip>
              </div>
              <Chip variant="dot" color="primary" className="text-lg md:text-xl text-blue-500 font-extrabold border-none">
                MA,MPhill ,MBBS
              </Chip>
              <div className="flex flex-row gap-4 w-1/2 md:w-full items-center font-bold text-gray-500">
                <FaMapMarkerAlt size={20} className="fill-gray-500" />
                <h1 className="font-bold md:font-extrabold text-md md:text-xl">Marine Drive, Mumbai (MH)</h1>
              </div>
              <h1 className="p-[.3rem]  w-1/2 font-extrabold text-center rounded-xl text-white bg-[#8ED2CF]">
                15 Years of Experince
              </h1>
            </div>
          </div>
          <div className="flex flex-col text-center justify-around items-end h-full">
            <h1 className="text-2xl md:text-6xl font-extrabold">₹ 649</h1>
            <h1 className="text-red-400 line-through  font-bold text-2xl md:text-3xl">₹ 649</h1>
            <h1 className="text-lg md:text-xl text-right">Consultation fee at clinic</h1>
            <div className="flex flex-row w-full justify-around items-center gap-2 md:gap-4">
              <h1 className="text-gray-600">Know More</h1>
              <Button radius="full" className="text-lg font-bold" color="primary">Consult Now</Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  )
}
