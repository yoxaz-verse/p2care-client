"use client";

import { editIcon, emailIcon, personIcon, phoneIcon } from "@/content/assets";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  Input,
  Tab,
  Tabs,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";

function EditProfile() {
  return (
    <section className="flex flex-col justify-center items-center h-full">
      <form className="flex flex-col gap-4 w-1/2">
        <p className="text-lg font-bold">Edit Profile</p>
        <div className="flex relative w-full justify-between items-center p-5 ">
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
        <Input
          label="User Name"
          placeholder="User Name"
          labelPlacement="outside"
          className="font-semibold bg-inherit text-[#90A4AE] rounded-none"
          endContent={
            <Image alt="person" width={10} height={10} src={personIcon} />
          }
        />
        <Input
          label="Email"
          placeholder="Email"
          labelPlacement="outside"
          className="font-semibold text-[#90A4AE] rounded-none"
          endContent={
            <Image alt="person" width={10} height={10} src={emailIcon} />
          }
        />
        <Input
          label="Phone"
          placeholder="Phone"
          labelPlacement="outside"
          className="font-semibold text-[#90A4AE] rounded-none"
          endContent={
            <Image alt="person" width={10} height={10} src={phoneIcon} />
          }
        />
        <Button
          color="primary"
          variant="light"
          className="border-2 font-bold border-[#3F8EFC]"
        >
          Save
        </Button>
      </form>
    </section>
  );
}

export default EditProfile;
