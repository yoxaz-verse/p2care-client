"use client";
import { smallArrowIcon } from "@/Content/assets";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


interface CtaButtonProps {
  onOpen: () => any;
}

function CtaButton({ onOpen }: CtaButtonProps) {
  return (
    <motion.div className="flex gap-1 md:gap-3 justify-end p-2 lg:justify-start items-center w-full me-3 lg:me-0">
      <button onClick={() => onOpen()} className="text-sm md:text-md  bg-secondary font-bold px-2 rounded-full py-1 md:py-3 md:px-12">
        Enquire Now
      </button>
      {/* <AnimatePresence>
        <motion.div
          key="arrow"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <button className="rounded-full bg-secondary min-w-max p-2 md:p-4">
            <Image
              src={smallArrowIcon}
              alt="small_arrow"
              width={1000}
              height={1000}
              className="p-0 m-0 w-1 h-1 md:w-2 md:h-2"
            />
          </button>
        </motion.div>
      </AnimatePresence> */}
    </motion.div>
  );
}

export default CtaButton;
