"use client";
import { smallArrowIcon } from "@/content/assets";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function CtaButton() {
  return (
    <motion.div className="flex gap-3 justify-start items-center w-full">
      <Button className="rounded-full font-bold px-12">Enquire Now</Button>
      <AnimatePresence>
        <motion.div
          key="arrow"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <Button className="rounded-full min-w-max p-4">
            <Image
              src={smallArrowIcon}
              alt="small_arrow"
              width={1000}
              height={1000}
              className="p-0 m-0 w-2 h-2"
            />
          </Button>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default CtaButton;
