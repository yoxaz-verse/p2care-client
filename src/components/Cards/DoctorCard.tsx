import { Card, CardBody, CardHeader, CardFooter, Image } from "@nextui-org/react";

export interface DoctorCardProps {
  name: string,
  type: string,
  image: string
}


export default function DoctorCard({ name, type, image }: DoctorCardProps) {
  return (
    <>
      <Card className="w-full h-[20vh] md:h-[40vh]">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={image}
        />
        <CardFooter className="absolute backdrop-blur-lg z-10 bottom-1 flex flex-col text-white m-0 md:m-2 bg-[#25B4F84D]  items-start">
          <p className="font-bold text-[8px] md:text-[16px]">{name}</p>
          <h4 className="font-medium text-[6px] md:text-[12px]">{type}</h4>
        </CardFooter>
      </Card>
    </>
  )
}
