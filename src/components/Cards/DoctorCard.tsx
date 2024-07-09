import { Card, CardBody, CardHeader, CardFooter, Image } from "@nextui-org/react";

export interface DoctorCardProps {
  name: string,
  type: string,
  image: string
}


export default function DoctorCard({ name, type, image }: DoctorCardProps) {
  return (
    <>
      <Card className="w-full h-[40vh]">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={image}
        />
        <CardFooter className="absolute z-10 bottom-1 flex flex-col text-white m-2 bg-[#25B4F84D]  items-start">
          <p className="font-bold">{name}</p>
          <h4 className="font-medium text-large">{type}</h4>
        </CardFooter>
      </Card>
    </>
  )
}
