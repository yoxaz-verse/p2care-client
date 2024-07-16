import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";

export interface BlogCardProps {
  image: any;
  heading: any;
  description: any;
}

export default function BlogCard({
  image,
  heading,
  description,
}: BlogCardProps) {
  return (
    <Card className="flex flex-col w-full justify-between h-[250px] lg:h-[580px]">
      <CardBody className="flex flex-col items-center h-full gap-[.2rem] md:gap-[.6rem] ">
        <Image src={image} alt="image" width={1000} height={1000} className="w-full rounded-sm h-[116px] lg:h-[265px]" />
        <h3 className="text-primary leading-[16px] lg:leading-[36px] text-[14px] lg:text-lg font-bold">{heading}</h3>
        <p className="text-[8px] lg:text-md">{description}</p>
        <button
          className="rounded-full self-end bg-primary text-sm lg:text-md px-2 py-1 lg:px-4 lg:py-2 font-bold text-white"
        >
          Read More
        </button>
      </CardBody>
    </Card>
  );
}
