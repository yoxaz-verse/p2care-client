"use client";
import Image from "next/image";
import React, { useState } from "react";
import BlackArrowButton from "../Buttons/blackArrowButton";
import { Card, CardBody, image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export interface ICategoryCardProps {
  heading?: string;
  subHeading?: string;
  background?: string;
  image: string;
  hover?: string;
  cta?: string;
  link: string;
}

function CategoryCard(props: ICategoryCardProps) {
  const router = useRouter();
  return (
    <Card
      onPress={() => {
        router.push(props.link);
      }}
      isPressable={true}
      className={`relative w-full rounded-2xl h-[180px] lg:h-[400px] ${props.background} hover:cursor-pointer hover:${props.hover}`}
    >
      <CardBody className={`flex flex-col justify-between p-3 lg:p-6`}>
        <div className="z-10">
          <h3 className="font-[600] text-[15px] lg:text-3xl">
            {props.heading}
          </h3>
          <p className="font-[400] text-[8px] lg:text-2xl">
            {props.subHeading}
          </p>
        </div>
        <Image
          className="absolute bottom-0 right-2 h-[130px] lg:h-[80%] w-auto "
          src={props.image}
          alt="doctors"
          width={1000}
          height={1000}
        />
        <BlackArrowButton />
      </CardBody>
    </Card>
  );
}

export default CategoryCard;
