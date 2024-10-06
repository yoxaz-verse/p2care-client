"use client";
import { DoctorListCard } from "@/components/Cards/DoctorListCard";
import { getData } from "@/core/apiHandler";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Spacer, Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function DoctorDetailsComponent({ id }: any) {
  const {
    data: getDoctor,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["getDoctors", id],
    queryFn: () => getData(`/doctor/get-all/${id}`, {}),
    enabled: !!id,
  });

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <Spinner />
        <h3>Loading Doctor Details..</h3>
      </div>
    );
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <section>
      <Spacer y={2} />
      <DoctorListCard
        bookNow={true}
        data={getDoctor?.data?.data}
        redirect={`${navigationRoutes.doctor}/${id}/booking`}
      />
      <div className="gap-2 flex flex-col">
        <h3 className="font-bold text-md md:text-lg text-start">Information</h3>
        <p className="text-md w-full lg:w-1/2 text-[#3C4959]">
          {getDoctor?.data?.data?.description || "No description available"}
        </p>
      </div>

      <Spacer y={2} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="min-h-[100px] md:min-h-[200px]">
          <h3 className="font-bold text-md md:text-lg">Contact Details</h3>
          <div className="flex flex-col text-md text-gray gap-2">
            <h3>Phone: {getDoctor?.data?.data?.phone || "N/A"}</h3>
            <h3>Email: {getDoctor?.data?.data?.email || "N/A"}</h3>
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt className="text-grey w-4 h-4" />
              <p className="text-[12px] font-[600] lg:text-[16px] text-grey">
                {getDoctor?.data?.data?.address || "No address available"}
              </p>
            </div>
          </div>
        </div>

        <div className="min-h-[100px] md:min-h-[200px]">
          <h3 className="font-bold text-md lg:text-lg">Visiting Time</h3>
          <div className="flex flex-col text-gray text-md gap-2">
            {getDoctor?.data?.data?.visitingTime?.length > 0 ? (
              getDoctor?.data?.data?.visitingTime.map(
                (v: any, index: number) => (
                  <h3 key={index}>
                    {v.from} - {v.to}
                  </h3>
                )
              )
            ) : (
              <p>No visiting times available</p>
            )}
            <Spacer y={2} />
            <h3>
              {getDoctor?.data?.data?.availableDays?.length > 0
                ? getDoctor?.data.data.availableDays.map(
                    (d: any, index: number) => (
                      <span key={index}>
                        {d}
                        {index < getDoctor?.data?.data?.availableDays.length - 1
                          ? ", "
                          : ""}
                      </span>
                    )
                  )
                : "No available days"}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorDetailsComponent;
