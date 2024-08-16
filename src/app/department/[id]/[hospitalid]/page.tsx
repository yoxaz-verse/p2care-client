"use client";
import HospitalDetailscomponent from "@/components/Pages/Hospitalid";
import { useParams } from "next/navigation";

export default function HospitalDetail() {
  const { hospitalid: id } = useParams();
  return (
    <HospitalDetailscomponent id={id} />
  )
}
