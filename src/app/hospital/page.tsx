"use client";
import HospitalCard from "@/components/Cards/HospitalCard";
import HospitalCard2 from "@/components/Cards/HospitalCard2";
import { getData } from "@/core/apiHandler";
import { hospitalRoutes } from "@/core/apiRoutes";
import { Select, SelectItem, Input, Button, Spacer } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
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
  const [city, setCity] = useState<any>('');
  const { data: getHospitals, isLoading } = useQuery({
    queryKey: ["getHospitals"],
    queryFn: () => {
      return getData(`${hospitalRoutes.hospital}?${city}`, {});
    },
    enabled: !!city
  })
  console.log(getHospitals);
  const { data: getCity } = useQuery({
    queryKey: ["getCity"],
    queryFn: () => {
      return getData("/city/all", {});
    }
  })

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row w-full gap-4 p-[.5rem] md:p-[1rem] justify-between">
        <Select
          startContent={<FaMapMarkerAlt size={20} />}
          onChange={(e) => setCity(e.target.value)}
          className="w-full md:max-w-xs bg-white"
        >
          {getCity?.data?.data.map((animal: any) => (
            <SelectItem
              className="font-bold text-xl"
              startContent={<FaMapMarkerAlt size={20} />}
              key={animal._id}
            >
              {animal.name}
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
        {getHospitals?.data?.map((data: any, index: any) => (
          <HospitalCard data={data} key={index} />
        ))}
      </div>
    </>
  );
}

export default List;
