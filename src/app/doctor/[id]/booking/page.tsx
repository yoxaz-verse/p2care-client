"use client";
import { Button, Divider, Input, RadioGroup, Spacer, Radio, Tabs, Tab, Card } from "@nextui-org/react";
import React, { useState } from "react";
import { DoctorListCard } from "@/components/Cards/DoctorListCard";

function Booking() {
  const [index, setIndex] = useState<number>(1);
  return (
    <section>
      <DoctorListCard />
      <Divider orientation="horizontal" />
      <div className="flex flex-col w-full">
        <h3 className="text-start text-md md:text-lg font-semibold">Enter Basic Details</h3>
        <div className="flex flex-col md:flex-row gap-4">
          <Input variant="bordered" type="text" radius="none" className="w-full md:w-2/3 hover:outline-none" placeholder="Full Name" labelPlacement="outside" label="Full Name" />
          <RadioGroup label="Gender" orientation="horizontal" className="flex gap-2 justify-around w-2/3 md:w-1/3" >
            <Radio value="Male" description="Male" className="border border-gray-300 p-3" />
            <Radio value="Female" description="Female" className="border border-gray-300 p-3" />
            <Radio value="Others" description="Others" className="border border-gray-300 p-3" />
          </RadioGroup>
          <Input variant="bordered" type="number" radius="none" className="w-full md:w-1/3 hover:outline-none" placeholder="Age" labelPlacement="outside" label="Age" />
        </div>
      </div>
      <Spacer y={2} />
      <div className="flex flex-col w-full gap-4">
        <h3 className="text-start text-lg font-semibold">
          Schedule date and time
        </h3>
        <h3 className="text-gray font-semibold text-md">Day</h3>
        <div className="flex flex-col md:flex-row justify-between gap-2">
          <div onClick={() => setIndex(1)} className={`flex flex-col cursor-pointer w-[200px] md:w-[400px] ${index === 1 ? "border-4 border-gray-300 text-gray-500" : "border-2 border-gray-200 text-gray-100"} justify-center items-center border-gray-300 rounded-xl p-[1rem]`}>
            <h3>Today</h3>
            <h3>5 slots</h3>
          </div>
          <div onClick={() => setIndex(2)} className={`flex flex-col cursor-pointer w-[200px] md:w-[400px] ${index === 2 ? "border-4 border-gray-300 text-gray-500" : "border-2 border-gray-200 text-gray-100"}  justify-center items-center rounded-xl p-[1rem]`}>
            <h3>Today</h3>
            <h3>5 slots</h3>
          </div>
          <div onClick={() => setIndex(3)} className={`flex flex-col cursor-pointer w-[200px] md:w-[400px] border justify-center  ${index === 3 ? "border-4 border-gray-300 text-gray-500" : "border-2 border-gray-200 text-gray-100"}   items-center border-gray-300 rounded-xl p-[1rem]`}>
            <h3>Today</h3>
            <h3>5 slots</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-4">
        <h3 className="text-start text-md text-gray font-semibold">
          Time Slot
        </h3>
        <RadioGroup
          className="flex flex-col gap-4"
        >
          <Radio value="1:00PM - 2:00PM">
            <div className="flex flex-row w-[70vw] justify-between">
              <p>1:00 PM - 2:00 PM</p>
              <p>₹649</p>
            </div>
          </Radio>
          <Radio value="10:00AM - 2:00PM">
            <div className="flex flex-row w-[70vw] justify-between">
              <p>10:00 PM - 2:00 PM</p>
              <p>₹649</p>
            </div>
          </Radio>
          <Radio value="5:00PM - 10:00PM">
            <div className="flex flex-row w-[70vw] justify-between">
              <p>5:00 PM - 10:00 PM</p>
              <p>₹649</p>
            </div>
          </Radio>
          <Radio value="1:00PM - 2:00PM">
            <div className="flex flex-row w-[70vw] justify-between">
              <p>1:00 PM - 2:00 PM</p>
              <p>₹649</p>
            </div>
          </Radio>
        </RadioGroup>
      </div>
      <Spacer y={2} />
      <Button color="primary" className="w-full">Next</Button>
    </section>
  );
}

export default Booking;
