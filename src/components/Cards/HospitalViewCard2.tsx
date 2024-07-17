import { Button, Card } from "@nextui-org/react";
import React from "react";
import { apollo2, smallArrowIcon } from "@/content/assets";
import Image from "next/image";

function HospitalViewCard2() {
  return (
    <Card
      style={{
        backgroundImage: `url(${apollo2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[200px] lg:h-[440px]"
    >
      <div className="w-full h-full bg-[#00000080] flex flex-col justify-between p-2 lg:p-5  items-start">
        <div>
          <h3 className="text-white font-bold text-[18px] lg:text-[35px]">
            Apollo Hospital
          </h3>
          <p className="text-white text-[11px] lg:text-[24px]">Hospital</p>
        </div>

        <Button
          className="  max-h-max lg:w-[200px] p-0 px-5 lg:px-10 text-[10px] lg:text-[18px] rounded-[30px]  bg-white  text-black self-center"
          endContent={
            <Image
              src={smallArrowIcon}
              className="w-2 h-2 lg:w-[18px] lg:h-[18px]"
              alt="smallArrow"
              width={1000}
              height={1000}
            />
          }
        >
          View Hospital
        </Button>
      </div>
    </Card>
  );
}

export default HospitalViewCard2;
