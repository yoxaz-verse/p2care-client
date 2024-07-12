import { DoctorListCard } from "@/components/Cards/DoctorListCard";



export default function Doctor() {
  return (
    <>
      <div className="flex flex-col gap-2">
        {Array.from({ length: 12 }, (_, index) => (
          <DoctorListCard key={index} />
        ))}
      </div>
    </>
  )
}
