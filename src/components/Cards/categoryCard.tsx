"use client";
import Image from "next/image";
import React, { useState } from "react";
import BlackArrowButton from "../Buttons/blackArrowButton";
import { Card, CardBody, image } from "@nextui-org/react";
import { motion } from "framer-motion";

export interface ICategoryCardProps {
  heading?: string;
  subHeading?: string;
  background?: string;
  image: string;
  hover?: string;
  cta?: string;
}

function CategoryCard(props: ICategoryCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        className={`relative w-full ${isHovered ? `${props.background}` : `${props.hover}`
          } rounded-2xl h-[180px] md:h-[400px] w-[150px] md:w-[350px] 
        
        `}
      >
        <CardBody className={`flex flex-col justify-between p-6`}>
          <div>
            <h3 className="font-[600] font-bold text-[15px] md:text-[32px]">{props.heading}</h3>
            <p className="font-[400] text-[8px] md:text-[16px]">{props.subHeading}</p>
          </div>
          <Image
            className="absolute w-[120px] md:w-[265px] h-[120px] md:h-[265px] bottom-0 right-2 h-[80%] w-auto"
            src={props.image}
            alt="doctors"
            width={1000}
            height={1000}
          />
          <BlackArrowButton />
        </CardBody>
      </Card>
    </motion.div>
  );
}

export default CategoryCard;
