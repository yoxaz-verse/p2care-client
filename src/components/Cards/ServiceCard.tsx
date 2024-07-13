"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
export interface ServiceCardProps {
  title: string;
  image: string;
  redirect: string;
}

function ServiceCard(props: ServiceCardProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(props.redirect);
  };
  return (
    <Card
      isPressable
      className=" h-[175px] lg:h-[350px] bg-primary-100 hover:cursor-pointer hover:bg-white"
      onPress={() => {
        handleClick();
      }}
    >
      <CardBody>
        <Image
          src={props.image}
          alt={props.title}
          width={1000}
          height={1000}
          className="w-full h-full rounded-xl object-cover"
        />
      </CardBody>
      <CardFooter>
        <h4 className="font-[600] text-[14px] lg:text-[28px] text-primary">
          {props.title}
        </h4>
      </CardFooter>
    </Card>
  );
}

export default ServiceCard;
