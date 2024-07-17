"use client";
import HospitalCard from "@/components/Cards/HospitalCard";
import HospitalCard2 from "@/components/Cards/HospitalCard2";
import { Select, SelectItem, Input, Button, Spacer } from "@nextui-org/react";
import React from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const cities = [
  { key: "delhi", label: "Delhi" },
  { key: "mumbai", label: "Mumbai" },
  { key: "kolkata", label: "Kolkata" },
  { key: "chennai", label: "Chennai" },
  { key: "bengaluru", label: "Bengaluru" },
  { key: "hyderabad", label: "Hyderabad" },
  { key: "pune", label: "Pune" },
  { key: "ahmedabad", label: "Ahmedabad" },
  { key: "jaipur", label: "Jaipur" },
  { key: "lucknow", label: "Lucknow" },
  { key: "chandigarh", label: "Chandigarh" },
  { key: "bhopal", label: "Bhopal" },
  { key: "patna", label: "Patna" },
];
function List() {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row w-full gap-4 p-[.5rem] md:p-[1rem] justify-between">
        <Select
          startContent={<FaMapMarkerAlt size={20} />}
          defaultSelectedKeys={["mumbai"]}
          className="w-1/2 md:max-w-xs bg-white"
        >
          {cities.map((animal: any) => (
            <SelectItem
              className="font-bold text-xl"
              startContent={<FaMapMarkerAlt size={20} />}
              key={animal.key}
            >
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <div className="flex flex-row w-full md:w-2/3 gap-4">
          <Input
            variant="bordered"
            className="border rounded-xl bg-white"
            placeholder="Search By Hospital Name, Speciality etc"
          />
          <Button className="bg-blue-500 rounded-full" isIconOnly>
            <FaSearch className="fill-white" />
          </Button>
        </div>
      </div>
      <Spacer y={5} />
      <div className="grid grid-cols-1 gap-10">
        {Array.from({ length: 12 }, (_, index) => (
          <HospitalCard key={index} />
        ))}
      </div>
    </>
  );
}

export default List;
