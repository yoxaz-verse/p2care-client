"use client";
import {
  Button,
  Divider,
  Input,
  RadioGroup,
  Spacer,
  Radio,
  Tabs,
  Tab,
  Spinner,
} from "@nextui-org/react";
import React, { useState } from "react";
import { DoctorListCard } from "@/components/Cards/DoctorListCard";
import { useParams, useRouter } from "next/navigation";
import { navigationRoutes } from "@/core/navigationRoutes";
import isAuth from "@/app/isAuth";
import { getData } from "@/core/apiHandler";
import { useQuery } from "@tanstack/react-query";

function Booking() {
  const router = useRouter();
  const [index, setIndex] = useState<number>(1);
  const { data, isLoading: isLoadingPatient } = isAuth();
  console.log(data?.data);
  const { id } = useParams();
  const { data: getDoctor, isLoading, isError, error } = useQuery({
    queryKey: ["getDoctors", id],
    queryFn: () => getData(`/doctor/get-all/${id}`, {}),
    enabled: !!id,
  });

  const { data: getGender, isLoading: isLoadingGender } = useQuery({
    queryKey: ["getGender"],
    queryFn: () => {
      return getData("/gender/all", {});
    }
  })
  const { data: getSlots, isLoading: isLoadingSlot } = useQuery({
    queryKey: ["getSlots"],
    queryFn: () => {
      return getData(`/doctor-slot/get-slots/${id}`, {});
    }
  })
  console.log(getSlots?.data.data.data)
  if (isLoading || isLoadingGender || isLoadingPatient || isLoadingSlot) {
    return (
      <div className="flex flex-col items-center justify-center">
        <Spinner />
        <h3>Loading Details..</h3>
      </div>
    )
  }
  return (
    <section>
      <DoctorListCard
        data={getDoctor?.data?.data}
        redirect={`${navigationRoutes.doctor}/${id}/booking`}
      />
      <Spacer y={5} />
      <Divider orientation="horizontal" />
      <Spacer y={5} />

      <div className="flex flex-col gap-5 w-full">
        <h3 className="text-start text-md lg:text-lg font-semibold">
          Enter Basic Details
        </h3>
        <div className="flex flex-col lg:flex-row gap-5">
          <Input
            variant="bordered"
            type="text"
            value={data?.data?.name}
            radius="none"
            className="w-full hover:outline-none h-full"
            placeholder="Full Name"
            disabled
            labelPlacement="outside"
            label="Full Name"
          />
          <RadioGroup
            label="Gender"
            orientation="horizontal"
            className="flex gap-0 justify-between w-full"
          >
            {getGender?.data.data.data.map((d: any, index: any) => {
              return <Radio
                key={d.name}
                onClick={(e: any) => console.log(e)}
                value={d?.name}
                description={d?.name}
                className=" border-gray-300 p-3"
              />
            })}
          </RadioGroup>
          <Input
            variant="bordered"
            type="number"
            radius="none"
            className="w-full hover:outline-none"
            placeholder="Age"
            labelPlacement="outside"
            label="Age"
          />
        </div>
      </div>
      <Spacer y={5} />
      <div className="flex flex-col w-full gap-5">
        <h3 className="text-start text-md lg:text-lg font-semibold">
          Schedule date and time
        </h3>
        <h3 className="text-gray font-semibold text-[12px] lg:[24px]">Day</h3>
        <div className="flex flex-row justify-between gap-5">
          <Button
            onPress={() => setIndex(1)}
            variant="ghost"
            className={`w-full border-${index === 1 ? 4 : 2} p-5 lg:p-7`}
          >
            Today <br /> 5 slots
          </Button>
          <Button
            onPress={() => setIndex(2)}
            variant="ghost"
            className={`w-full border-${index === 2 ? 4 : 2} p-5 lg:p-7`}
          >
            Tommorow <br /> 5 slots
          </Button>
          <Button
            onPress={() => setIndex(3)}
            variant="ghost"
            className={`w-full border-${index === 3 ? 4 : 2} p-5 lg:p-7`}
          >
            Custom <br /> 5 slots
          </Button>
        </div>
      </div>
      <Spacer y={5} />
      <div className="flex flex-col w-full gap-5">
        <h3 className="text-start text-gray font-semibold text-[12px] lg:[24px]">
          Time Slot
        </h3>
        <div>
          <Tabs aria-label="Options">
            <Tab key="morning" title="Morning">
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 ">
                {Array.from({ length: 3 }, (_, index) => (
                  <Button
                    key={index}
                    className="w-full"
                    variant="ghost"
                    color="secondary"
                  >
                    {9 + index}:00 AM
                  </Button>
                ))}
              </div>
            </Tab>
            <Tab key="afternoon" title="Afternoon">
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 ">
                {Array.from({ length: 3 }, (_, index) => (
                  <Button
                    key={index}
                    className="w-full"
                    variant="ghost"
                    color="secondary"
                  >
                    {1 + index}:00 PM
                  </Button>
                ))}
              </div>
            </Tab>
            <Tab key="evening" title="Evening">
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 ">
                {Array.from({ length: 3 }, (_, index) => (
                  <Button
                    key={index}
                    className="w-full"
                    variant="ghost"
                    color="secondary"
                  >
                    {4 + index}:00 PM
                  </Button>
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <Spacer y={5} />
      <Button
        color="primary"
        className="w-full"
        onPress={() => {
          router.push(navigationRoutes.profile);
        }}
      >
        Book
      </Button>
    </section>
  );
}

export default Booking;
