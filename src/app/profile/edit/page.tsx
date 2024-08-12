"use client";
import useAuth from "@/app/isAuth";
import { editIcon, emailIcon, personIcon, phoneIcon } from "@/Content/assets";
import { patchData } from "@/core/apiHandler";
import {
  Avatar,
  Button,
  Input,
  Spinner,
} from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function EditProfile() {
  const { data, isLoading } = useAuth();
  const router = useRouter();
  const EditProfile = useMutation({
    mutationKey: ["editprofile"],
    mutationFn: (data: any) => {
      return patchData(`/patient/${data._id}`, {}, data);
    },
    onSuccess: (data: any) => {
      console.log(data);
      toast.success("Profile Edited", {
        className: "bg-green-300",
        position: "top-right"
      });
      router.push('/profile');
    },
    onError: (error: any) => {
      console.log(error);
      toast.error("Profile Edit Failed", {
        className: "bg-red-300",
        position: "top-right"
      });
    },
  });

  const [formData, setFormData] = useState<any>({
    name: data?.data?.name || "",
    email: data?.data?.email || "",
    phone: data?.data?.phone || "",
    _id: data?.data?._id
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [type]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    EditProfile.mutate(formData);
  };

  return (
    isLoading ?
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <Spinner />
        <h3>Loading User details..</h3>
      </div> : (
        <section className="flex flex-col justify-center items-center h-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2">
            <p className="text-lg font-bold">Edit Profile</p>
            <div className="flex relative w-full justify-between items-center p-5">
              <div className="absolute z-10 top-0 left-0 w-full h-[60px] lg:h-[80px] bg-primary rounded-sm"></div>
              <Avatar
                className="w-[80px] lg:w-[120px] h-auto z-20 text-large border-white border-5"
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              />
              <div className="p-2 lg:p-4 bg-white rounded-full z-20 hover:cursor-pointer hover:border-primary hover:border-5 transition-all duration-100 ease-in-out">
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
              value={formData.name}
              onChange={(e) => handleChange(e, "name")}
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
              value={formData.email}
              onChange={(e) => handleChange(e, "email")}
              labelPlacement="outside"
              className="font-semibold text-[#90A4AE] rounded-none"
              endContent={
                <Image alt="email" width={10} height={10} src={emailIcon} />
              }
            />
            <Input
              label="Phone"
              placeholder="Phone"
              onChange={(e) => handleChange(e, "phone")}
              value={formData.phone}
              labelPlacement="outside"
              className="font-semibold text-[#90A4AE] rounded-none"
              endContent={
                <Image alt="phone" width={10} height={10} src={phoneIcon} />
              }
            />
            <Button
              type="submit"
              color="primary"
              variant="light"
              className="border-2 font-bold border-[#3F8EFC]"
            >
              Save
            </Button>
          </form>
        </section>
      )
  );
}

export default EditProfile;
