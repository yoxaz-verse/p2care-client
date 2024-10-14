"use client";
import { DoctorListCard } from "@/components/Cards/DoctorListCard";
import { getData } from "@/core/apiHandler";
import { navigationRoutes } from "@/core/navigationRoutes";
import { Chip, Spacer, Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function DoctorDetailsComponent({ id }: any) {
  // Utility function to convert 24-hour time format to 12-hour format with AM/PM
  const convertTo12Hour = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? "PM" : "AM";
    const adjustedHour = hour % 12 || 12;
    return `${adjustedHour}:${minutes} ${ampm}`;
  };

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
        <h3 className="font-bold text-md md:text-xl text-start">Information</h3>
        <p className="text-md w-full lg:w-1/2 text-[#3C4959]">
          {getDoctor?.data?.data?.description || ""}
        </p>
        <div className=" text-gray text-md gap-2">
          <div className="flex flex-wrap gap-3 my-5">
            {getDoctor?.data?.data?.qualifications?.length > 0 ? (
              getDoctor?.data?.data?.qualifications.map(
                (v: any, index: number) => (
                  <Chip key={index} variant="flat" color="primary">
                    {v}
                  </Chip>
                )
              )
            ) : (
              <p></p>
            )}
          </div>
          <div className="flex flex-wrap gap-3 my-5">
            {getDoctor?.data?.data?.achievements?.length > 0 ? (
              getDoctor?.data?.data?.achievements.map(
                (v: any, index: number) => (
                  <Chip key={index} variant="bordered" color="warning">
                    {v}
                  </Chip>
                )
              )
            ) : (
              <p></p>
            )}
          </div>
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

            <div className="flex flex-wrap gap-3 my-5">
              {getDoctor?.data?.data?.visitingTime?.length > 0 ? (
                getDoctor?.data?.data?.visitingTime.map(
                  (v: any, index: number) => (
                    <Chip key={index} variant="faded" color="primary">
                      {convertTo12Hour(v.from)} - {convertTo12Hour(v.to)}
                    </Chip>
                  )
                )
              ) : (
                <p>No visiting times available</p>
              )}
            </div>
            <Spacer y={2} />
            <h3 className="font-bold text-md lg:text-lg">Available Days</h3>
            <div className="flex flex-wrap gap-2 my-5">
              {getDoctor?.data?.data?.availableDays?.length > 0 ? (
                getDoctor?.data.data.availableDays.map(
                  (d: any, index: number) => (
                    <Chip key={index} variant="dot" color="primary">
                      {d}
                    </Chip>
                  )
                )
              ) : (
                <Chip color="default">No available days</Chip>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorDetailsComponent;
