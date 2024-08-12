"use client";
import DoctorDetailsComponent from "@/components/Pages/DoctorPage";
import { useParams } from "next/navigation";

export default function DoctorDetails() {
  const { doctorid: id } = useParams();
  console.log(id);
  return (
    <DoctorDetailsComponent id={id} />
  )
}
