"use client";
import { smallArrowIcon } from "@/Content/assets";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";



function CtaButton() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <motion.div
      className="flex gap-3 bg-primary justify-start items-center w-full"
      onHoverStart={() => {
        setIsHovered(true);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
      }}
    >
      <Button
        className="rounded-full bg-secondary text-[8px] md:text-[16px] font-bold px-2 md:px-12"
        style={{ width: isHovered ? "100%" : "auto" }}
      >
        Enquire Now
      </Button>
      <AnimatePresence>
        {!isHovered && (
          <motion.div
            key="arrow"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <Button isIconOnly className="rounded-full bg-secondary min-w-max p-2 md:p-4">
              <Image
                src={smallArrowIcon}
                alt="small_arrow"
                width={10}
                height={10}
                className="p-0 m-0"
              />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default CtaButton;
