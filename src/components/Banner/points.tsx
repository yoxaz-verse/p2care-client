import { bandaidIcon } from "@/Content/assets";
import Image from "next/image";
import React, { ReactNode } from "react";

interface IPointsProps {
  point?: string;
  icon?: ReactNode;
  background?: string;
}

function Points(props: IPointsProps) {
  return (
    <div className="flex gap-2 lg:gap-5 items-center text-white">
      <div
        className={`p-1 lg:p-4 rounded-full bg-${
          props.background ?? "red-300"
        }`}
      >
        <Image
          src={bandaidIcon}
          width={1000}
          height={1000}
          alt={props.point ?? "icon"}
          className="w-[6px] h-[6px] lg:w-5 lg:h-5"
        />
      </div>
      <p className="text-[8px] font-[400] lg:text-[20px]">
        {props.point ?? "Quick Points To Show"}
      </p>
    </div>
  );
}

export default Points;
