"use client";
import HospitalCard from "@/components/Cards/HospitalCard";
import { getData } from "@/core/apiHandler";
import { hospitalRoutes } from "@/core/apiRoutes";
import { navigationRoutes } from "@/core/navigationRoutes";
import {
  Select,
  SelectItem,
  Input,
  Button,
  Spacer,
  Spinner,
} from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

function List() {
  const [city, setCity] = useState<any>("");
  const { data: getHospitals, isLoading } = useQuery({
    queryKey: ["getHospitals"],
    queryFn: () => {
      return getData(`${hospitalRoutes.hospital}`, { city });
    },
  });
  console.log(getHospitals?.data.data);
  const { data: getCity, isLoading: isLoadingCity } = useQuery({
    queryKey: ["getCity"],
    queryFn: () => {
      return getData("/city/all", {});
    },
  });

  return isLoading || isLoadingCity ? (
    <div className="flex flex-col h-[80vh] items-center justify-center">
      <Spinner />
      <h3>Loading Hospital Details..</h3>
    </div>
  ) : (
    <>
      <div className="flex flex-col-reverse md:flex-row w-full gap-4 p-[.5rem] md:p-[1rem] justify-between">
        {/* <Select
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
        </Select> */}
        {/* <div className="flex flex-row w-full md:w-2/3 gap-4">
          <Input
            variant="bordered"
            className="border rounded-xl bg-white"
            placeholder="Search By Hospital Name, Speciality etc"
          />
          <Button className="bg-blue-500 rounded-full" isIconOnly>
            <FaSearch className="fill-white" />
          </Button>
        </div> */}
      </div>
      <Spacer y={5} />
      <div className="grid grid-cols-1 gap-10">
        {getHospitals?.data?.data?.data.map((data: any, index: any) => (
            <HospitalCard redirect={`${navigationRoutes.hospital}/${data._id}`} data={data} key={index} />
          ))}
      </div>
    </>
  );
}

export default List;
