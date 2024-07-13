import { bandaidIcon } from "@/content/assets";
import Image from "next/image";
import React, { ReactNode } from "react";

interface IPointsProps {
  point?: string;
  icon?: ReactNode;
  background?: string;
}

function Points(props: IPointsProps) {
  return (
    <div className="flex gap-5 items-center text-white">
      <div className={`p-4 rounded-full bg-${props.background ?? "red-300"}`}>
        <Image
          src={bandaidIcon}
          width={20}
          height={20}
          alt={props.point ?? "icon"}
          className="w-5 h-5"
        />
      </div>
      <p>{props.point ?? "Quick Points To Show"}</p>
    </div>
  );
}

export default Points;
