"use client";
import DoctorDetailsComponent from "@/components/Pages/DoctorPage";
import { useParams } from "next/navigation";
import React from "react";

function DoctorDetails() {
  const { doctorid: id } = useParams();
  return (
    <DoctorDetailsComponent id={id} />
  );
}

export default DoctorDetails;
