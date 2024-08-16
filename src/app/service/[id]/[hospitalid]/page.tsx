'use client';
import HospitalDetailscomponent from "@/components/Pages/Hospitalid";
import { useParams } from "next/navigation";

export default function HospitalId() {
  const { hospitalid: id } = useParams();
  return (
    <HospitalDetailscomponent id={id} />
  )
}
