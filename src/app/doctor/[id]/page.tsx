"use client";
import DoctorDetailsComponent from "@/components/Pages/DoctorPage";
import { useParams } from "next/navigation";
import React from "react";


function DoctorDetails() {
  const { id } = useParams();
  return (
    <>
      <DoctorDetailsComponent id={id} />
    </>
  );
}

export default DoctorDetails;
