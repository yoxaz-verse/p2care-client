import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export interface BlogCardProps {
  image: any;
  heading: any;
  description: any;
  redirect: any;
}

export default function BlogCard({
  image,
  heading,
  description,
  redirect,
}: BlogCardProps) {
  const limit = 100; // Set your character limit here
  const truncatedDescription =
    description.length > limit
      ? description.substring(0, limit) + "..."
      : description;

  return (
    <Card className="flex flex-col w-full justify-between h-[320px] lg:h-[585px]">
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
        <p className="text-[10px] lg:text-[16px]">{truncatedDescription}</p>
        <Link href={redirect}>
          <button className="rounded-full self-end place-items-end bg-primary text-sm lg:text-md px-2 py-1 lg:px-4 lg:py-2 font-bold text-white">
            Read More
          </button>
        </Link>
      </CardBody>
    </Card>
  );
}
