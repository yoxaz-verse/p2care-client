import React from "react";
import { Card, CardBody, Spacer } from "@nextui-org/react";
import { apolloLogo, apolloDoc } from "@/content/assets";
import { HiLocationMarker } from "react-icons/hi";
import { CiClock2 } from "react-icons/ci";

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
            <h1 className="font-extrabold text-lg">Hamza Ali</h1>
            <p className="text-[10px] md:text-lg">Internal Medicine</p>
            <p className="text-[10px] md:text-lg">17 Years experience</p>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

const HospitalCard = () => {
  return (
    <Card>
      <CardBody className="flex flex-col h-full">
        <div className="flex flex-row gap-4">
          <img
            src={apolloLogo}
            className="h-[100px] md:h-[220px] w-[100px] md:w-[220px] rounded-full"
            alt="image"
          />
          <div className="flex flex-col justify-between gap-4">
            <h1 className="text-2xl md:text-4xl font-extrabold">
              Apollo Spectra Hospital
            </h1>
            <div className="flex flex-row w-full gap-4">
              <h1 className="text-md text-blue-500 font-bold md:text-xl">
                Multi-specialty Hospital
              </h1>
              <div className="flex flex-row font-bold items-center text-blue-500">
                <HiLocationMarker className="fill-blue-500" />
                <h1>Mumbai City</h1>
              </div>
            </div>
            <div className="flex flex-row gap-2 justify-between">
              <h1 className="text-lg">
                <span className="font-extrabold">₹ 300 - ₹700</span>{" "}
                Consultation Fees
              </h1>
            </div>
            <div className="flex flex-row w-full flex-wrap font-bold text-lg gap-4">
              <h1>10 Specialities</h1>
              <div className="flex flex-row gap-2 items-center">
                <div className="w-2 h-2 bg-black rounded-full" />
                <p>10 Doctors</p>
              </div>
              <div className="flex gap-4 items-center flex-row">
                <CiClock2 />
                <h1>MON-SUN 9:00AM-9:00PM</h1>
              </div>
            </div>
            <Spacer y={2} />
            <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-4">
              <div className="flex flex-row gap-2">
                {Array.from({ length: 2 }, (_, index) => (
                  <DocHospital key={index} />
                ))}
              </div>
              <h1>Know More</h1>
              <button className="bg-blue-500 rounded-full px-[10px] py-[5px] text-white font-bold">
                Consult Now
              </button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default HospitalCard;
