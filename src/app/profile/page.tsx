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
} from "@/Content/assets";
import { Avatar, Card, CardBody, Spinner, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "../isAuth";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/core/apiHandler";
import Link from "next/link";

function Profile() {
  const { data, isError, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isError) {
      console.error("Error fetching auth data:", isError);
      router.push("/");
    } else if (data === undefined) {
      router.push("/");
    }
  }, [data, isError, router]);
  const { data: getAppointment, isLoading: isLoadingAppointment } = useQuery({
    queryKey: ["getAppointment", data?.data?._id],
    queryFn: () => {
      return getData(`/appointment/patient/${data?.data?._id}`, {});
    },
  });
  console.log(getAppointment?.data.data);
  return isLoading ? (
    <div className="flex flex-col h-[80vh] items-center justify-center">
      <Spinner />
      <h3 className="text-blue-400">Loading Profile..</h3>
    </div>
  ) : (
    <section className="grid grid-col-1 lg:grid-cols-2 gap-5">
      <div className="flex flex-col justify-around gap-5 h-full pe-5 border-r-1">
        <div className="flex gap-5">
          <Link href="/">
            <p className="text-lg font-bold">Home</p>
          </Link>
          <p className="text-lg font-bold"> {">"} </p>
          <p className="text-lg font-bold">Profile</p>
        </div>
        <div className="flex relative justify-between items-center p-5 ">
          <div className=" z-10 top-0 left-0 w-full h-[60px] lg:h-[80px] bg-primary rounded-sm"></div>
          {/* <Avatar
              className="w-[80px] lg:w-[120px] h-auto z-20 text-large border-white border-5"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            /> */}

          <div className="p-2 m-2 lg:p-4 bg-white rounded-full z-20 hover:cursor-pointer hover:border-primary hover:border-5 transition-all duration-100 ease-in-out">
            <Image
              src={editIcon}
              alt="edit icon"
              className="w-[10px] h-[10px] lg:w-[20px] lg:h-[20px]"
              width={20}
              height={20}
            />
          </div>
        </div>
        <ProfileCard
          heading="User name"
          content={data.data.name}
          icon={personIcon}
        />
        <ProfileCard
          heading="Email"
          content={data?.data?.email}
          icon={emailIcon}
        />
        <ProfileCard
          heading="Phone"
          content={data?.data?.phone}
          icon={phoneIcon}
        />
      </div>
      <div className="flex flex-col gap-5">
        <Tabs aria-label="Options">
          <Tab key="Upcoming" title="Upcoming">
            <Card className="grid grid-cols-justify-self-end my-2">
              {getAppointment?.data.data.data.filter(
                (d: any) => new Date(d.date) > new Date()
              ).length > 0 ? (
                getAppointment?.data.data.data
                  .filter((d: any) => new Date(d.date) > new Date())
                  .map((appointment: any, index: any) => (
                    <DoctorProfile
                      data={appointment.doctor}
                      key={index}
                      title="Upcoming"
                    />
                  ))
              ) : (
                <CardBody>
                  <Image
                    alt="no appointment"
                    src={noappoints}
                    width={1000}
                    height={1000}
                    className="w-[400px] self-center"
                  />
                </CardBody>
              )}
            </Card>
          </Tab>
          <Tab key="Completed" title="Completed">
            <Card className="flex flex-col gap-2 my-2">
              {getAppointment?.data?.data.data.filter(
                (d: any) => new Date(d.date) < new Date()
              ).length > 0 ? (
                getAppointment?.data.data.data
                  .filter((d: any) => new Date(d.date) < new Date())
                  .map((appointment: any, index: any) => (
                    <DoctorProfile
                      data={appointment.doctor}
                      key={index}
                      title="Completed"
                    />
                  ))
              ) : (
                <CardBody>
                  <Image
                    alt="no appointment"
                    src={noappoints}
                    width={1000}
                    height={1000}
                    className="w-[400px] self-center"
                  />
                </CardBody>
              )}
            </Card>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}

export default Profile;
