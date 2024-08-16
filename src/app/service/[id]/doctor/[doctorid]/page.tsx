'use client';
import DoctorDetailsComponent from "@/components/Pages/DoctorPage";
import { useParams } from "next/navigation"

export default function DoctorPage() {
  const { doctorid: id } = useParams();

  return <DoctorDetailsComponent id={id} />
}
