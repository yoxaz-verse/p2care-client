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
    <Card className="flex flex-col w-full justify-between h-[300px] lg:h-[585px]">
      <CardBody className="p-2 flex flex-col gap-2">
        <Image
          src={image}
          alt="image"
          width={1000}
          height={1000}
          className="w-full rounded-sm h-[116px] lg:h-[265px]"
        />
        <h3 className="text-primary  text-[14px] lg:text-[32px] font-[700]">
          {heading}
        </h3>
        <p className="text-[8px] lg:text-[16px]">{description}</p>
        <Button className="rounded-full self-end bg-primary text-sm lg:text-md p-2 lg:px-4 lg:py-2 font-bold text-white">
          Read More
        </Button>
      </CardBody>
    </Card>
  );
}
