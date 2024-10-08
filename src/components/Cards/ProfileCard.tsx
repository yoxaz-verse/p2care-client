import Image from "next/image";
import React from "react";

interface ProfileCardProps {
  heading: string;
  content: string;
  icon: string;
}

function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="flex gap-2 items-center border-b-1 pb-2">
      <div className="w-[22.5px] lg:w-[45px]">
        <Image
          src={props.icon}
          alt="person icon"
          className="w-[15px] h-max lg:w-[30px] lg:h-max"
          width={30}
          height={30}
        />
      </div>
      <div>
        <p className="text-[7px] lg:text-[14px] font-[400] text-grey ">
          {props.heading}
        </p>
        <p className="text-[10px] lg:text-[20px] font-[500] text-black ">
          {props.content}
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
