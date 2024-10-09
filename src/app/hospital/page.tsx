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
  const [searchTerm, setSearchTerm] = useState(""); // State for the search input

  const { data: getHospitals, isLoading } = useQuery({
    queryKey: ["getHospitals"],
    queryFn: () => {
      return getData(`${hospitalRoutes.hospital}`, { city });
    },
  });

  // const { data: getCity, isLoading: isLoadingCity } = useQuery({
  //   queryKey: ["getCity"],
  //   queryFn: () => {
  //     return getData("/city/all", {});
  //   },
  // });

  // Handle input change for search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter hospitals based on search term if data is available
  const hospitalsData = getHospitals?.data?.data.data || []; // Extract hospitals data or set to an empty array

  const filteredHospitals = hospitalsData.filter((hospital: any) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      hospital.name.toLowerCase().includes(searchLower) ||
      hospital.city?.name?.toLowerCase().includes(searchLower) ||
      hospital.district?.name?.toLowerCase().includes(searchLower) ||
      hospital.description?.toLowerCase().includes(searchLower)
    );
  });

  return isLoading ? (
    <div className="flex flex-col h-[80vh] items-center justify-center">
      <Spinner />
      <h3>Loading Hospital Details..</h3>
    </div>
  ) : (
    <>
      <div className="flex flex-col-reverse md:flex-row w-full gap-4 p-[.5rem] md:p-[1rem] justify-between">
        <div className="flex flex-row w-full md:w-2/3 gap-4">
          <Input
            variant="bordered"
            className="border rounded-xl bg-white"
            placeholder="Search By Hospital Name, City, District, etc"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {/* <Button className="bg-blue-500 rounded-full" isIconOnly>
            <FaSearch className="fill-white" />
          </Button> */}
        </div>
      </div>
      <Spacer y={5} />
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        {filteredHospitals.length > 0 ? (
          filteredHospitals.map((data: any, index: any) => (
            <HospitalCard
              redirect={`${navigationRoutes.hospital}/${data._id}`}
              data={data}
              key={index}
            />
          ))
        ) : (
          <p>No hospitals found matching your criteria.</p>
        )}
      </div>
    </>
  );
}

export default List;
