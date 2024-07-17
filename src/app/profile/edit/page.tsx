"use client";
import { DoctorListCard } from "@/components/Cards/DoctorListCard";
import { DoctorProfile } from "@/components/Cards/DoctorProfile";
import ProfileCard from "@/components/Cards/ProfileCard";
import ColourCard from "@/components/Development/colourCard";
import {
  editIcon,
  emailIcon,
  noappoints,
  personIcon,
  phoneIcon,
} from "@/content/assets";
import { Avatar, Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

function EditProfile() {
  return (
    <section className="grid grid-col-1 lg:grid-cols-2 gap-5">
      <div className="flex flex-col justify-around gap-5 h-full pe-5 border-r-1">
        <p className="text-lg font-bold">Edit Profile</p>
        <div className="flex relative justify-between items-center p-5 ">
          <div className="absolute z-10 top-0 left-0 w-full h-[60px] lg:h-[80px] bg-primary rounded-sm"></div>
          <Avatar
            className="w-[80px] lg:w-[120px] h-auto z-20 text-large border-white border-5"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          />
          <div className="p-2 lg:p-4 bg-white rounded-full z-20 hover:cursor-pointer hover:border-primary hover:border-5 transition-all duration-100 ease-in-out ">
            <Image
              src={editIcon}
              alt="edit icon"
              className="w-[10px] h-[10px] lg:w-[20px] lg:h-[20px]"
              width={20}
              height={20}
            />
          </div>
        </div>
        <ProfileCard heading="User name" content="John Doe" icon={personIcon} />
        <ProfileCard
          heading="Email"
          content="p2care@gmail.com"
          icon={emailIcon}
        />
        <ProfileCard
          heading="Phone"
          content="+91 9876543210"
          icon={phoneIcon}
        />
      </div>
    </section>
  );
}

export default EditProfile;
