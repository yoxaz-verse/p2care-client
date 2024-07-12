"use client";
import { Input, Button, Select, SelectItem } from "@nextui-org/react";
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
  { key: "patna", label: "Patna" }
];

function Details() {
  return (
    <>
      <div className="flex flex-row w-full gap-4 p-[1rem] justify-between">
        <Select
          startContent={<FaMapMarkerAlt size={20} />}
          selectedKeys={["mumbai"]}
          className="max-w-xs bg-white"
        >
          {cities.map((animal: any) => (
            <SelectItem className="font-bold text-xl" startContent={<FaMapMarkerAlt />} key={animal.key}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
        <div className="flex flex-col md:flex-row w-full md:w-2/3 gap-4">
          <Input className="border rounded-xl border-gray-400" placeholder="Search By Doctor Name, Speciality etc" />
          <Button className="bg-blue-500 rounded-full" isIconOnly>
            <FaSearch className="fill-white" />
          </Button>
        </div>
      </div>

    </>
  );
}

export default Details;
