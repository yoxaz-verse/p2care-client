import { hospitalLogo } from "@/content/assets";
import {
  isDesktop,
  isLargeDesktop,
  isMobile,
  isTablet,
} from "@/utils/screenSize";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { CiClock2 } from "react-icons/ci";
import { HiLocationMarker } from "react-icons/hi";

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
        <div className="flex flex-col justify-between ">
          <h2 className="font-[700] text-[20px] lg:text-[44px] ">
            Apollo Spectra Hospital
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-[600px]">
            <h3 className="text-primary font-[700] text-[14px] md:text-[24px]">
              Multi-specialty Hospital
            </h3>
            <div className="flex font-[700] text-[14px] md:text-[24px] items-center text-primary">
              <HiLocationMarker className="fill-primary" />
              <h3>Mumbai City</h3>
            </div>
          </div>
          <h4 className="text-[12px] lg:text-[24px] font-[700] text-bodyText">
            ₹ 300 - ₹700{" "}
            <span className="text-[12px] lg:text-[24px] font-[500]">
              Consultation Fees
            </span>
          </h4>
          <div className="flex w-full flex-wrap font-[700] text-[12px] lg:text-[24px] gap-10 text-bodyText">
            <div className="flex gap-5">
              <p>10 Specialities</p>
              <div className="flex gap-4 items-center">
                <div className="w-[10px] h-[10px] bg-bodyText rounded-full" />
                <p>10 Doctors</p>
              </div>
            </div>

            <div className="flex gap-4 items-center  text-[12px] lg:text-[24px] font-[500]">
              <CiClock2 />
              <h1>MON-SUN 9:00AM-9:00PM</h1>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default HospitalCard2;
