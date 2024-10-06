"use client";
import { Button, Card } from "@nextui-org/react";
import React from "react";
import { apollo, smallArrowIcon } from "@/Content/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";

function HospitalViewCard({ data }: any) {
  const router = useRouter();
  if (data === undefined) return null;
  return (
    <Card
      style={{
        backgroundImage: `url(${data?.image?.path || apollo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[150px] lg:h-[340px]"
    >
      <div className="w-full h-full bg-[#00000080] flex flex-col justify-between p-2 lg:p-5  items-start">
        <div>
          <h3 className="text-white font-bold text-[18px] lg:text-[35px]">
            {data?.name}
          </h3>
          <p className="text-white text-[11px] lg:text-[24px]">Hospital</p>
        </div>

        <Button
          onPress={() => router.push(`/hospital/${data._id}`)}
          className="max-h-max lg:w-[200px] p-0 px-5 lg:px-10 text-[10px] lg:text-[18px] rounded-[30px]  bg-white  text-black"
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

export default HospitalViewCard;
