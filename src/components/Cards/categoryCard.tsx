"use client";
import Image from "next/image";
import React, { useState } from "react";
import BlackArrowButton from "../Buttons/blackArrowButton";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";
import { femaleDoctor01 } from "@/Content/assets";

interface ICategoryCardProps {
  heading?: string;
  subHeading?: string;
  background?: string;
  image?: string;
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
      <Card
        className={`relative w-full bg-${
          isHovered ? "primary" : "secondary"
        } rounded-[20px] h-[400px]  
        
        `}
      >
        <CardBody className="flex flex-col justify-between p-6">
          <div>
            <h3 className="font-[600] text-[32px]">Doctors</h3>
            <p className="font-[400] text-[16px]">Connect within 60 seconds</p>
          </div>
          <Image
            className="absolute bottom-0 right-2 h-[80%] w-auto"
            src={femaleDoctor01}
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
