import { femaleDoctor01 } from "@/Content/assets";
import { Card, CardFooter, Image } from "@nextui-org/react";

export default function DoctorCard() {
  return (
    <Card className="flex flex-col rounded-xl">
      <Image src={femaleDoctor01} alt="image" className="bg-cover" />
      <CardFooter className="rounded-xl bg-primary-gradient flex flex-col w-full">
        <h1>Jim Carry</h1>
        <p>Orthodontist.</p>
      </CardFooter>
    </Card>
  )
}
