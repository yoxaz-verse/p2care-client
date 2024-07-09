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
  // get the items from the props also give default values
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card isPressable
        className={`relative w-full ${isHovered ? `${props.background}` : `${props.hover}`
          } rounded-2xl h-[40vh]  
        
        `}
      >
        <CardBody className={`flex flex-col justify-between p-6`}>
          <div>
            <h3 className="font-[600] text-3xl">{props.heading}</h3>
            <p className="font-[400] text-xl">{props.subHeading}</p>
          </div>
          <Image
            className="absolute bottom-0 right-2 h-[80%] w-auto"
            src={props.image}
            alt="doctors"
            width={1000}
            height={1000}
          />
          <BlackArrowButton />
        </CardBody>
      </Card>
    </motion.div >
  );
}

export default CategoryCard;
