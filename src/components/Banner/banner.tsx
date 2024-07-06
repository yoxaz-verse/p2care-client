"use client";
import React, { useEffect, useState } from "react";
import { bannerBackground, doctor } from "@/Content/assets";
import { motion, useAnimate } from "framer-motion";
import {
  isDesktop,
  isLargeDesktop,
  isMobile,
  isTablet,
} from "@/Utils/screenSize";
import Image from "next/image";
import Points from "./points";
function Banner() {
  const [scope, animate] = useAnimate();
  const [isRendered, setIsRendered] = useState<boolean>(false);

  const handleAnimation = async () => {
    await animate(
      "h1",
      {
        opacity: 1,
        x: [
          isMobile()
            ? -50
            : isTablet()
            ? -100
            : isDesktop()
            ? -300
            : isLargeDesktop()
            ? -500
            : -700,
          0,
        ],
      },
      {
        duration: 0.5,
        type: "spring",
      }
    );
    await animate(
      "h1",
      {
        y: isMobile()
          ? -10
          : isTablet()
          ? -20
          : isDesktop()
          ? -30
          : isLargeDesktop()
          ? -50
          : -50,
      },
      {
        duration: 0.5,
        type: "spring",
      }
    );
  };

  useEffect(() => {
    handleAnimation();
    setIsRendered(true);
  }, []);
  return (
    <section
      ref={scope}
      className="relative bg-cover bg-center h-[700px] flex flex-col items-center align-middle rounded-[30px] lg:rounded-[70px]"
      style={{ backgroundImage: `url(${bannerBackground})` }}
    >
      <motion.h1
        initial={{
          opacity: 0,
        }}
        className="text-[#C6DEFD] font-[700] text-[55px] md:text-[115px] lg:text-[150px] xl:text-[225px]"
      >
        P2 Care
      </motion.h1>
      <Image
        src={doctor}
        alt="P2Care Logo"
        width={1000}
        height={1000}
        className={`max-w-max h-[600px] absolute bottom-0 transition delay-500 duration-1000 ease-in-out opacity-${
          isRendered ? 100 : 0
        }`}
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          x: isMobile()
            ? 0
            : isTablet()
            ? 100
            : isDesktop()
            ? 200
            : isLargeDesktop()
            ? 300
            : 300,
        }}
      >
        <Points point="Quick Points To Show" />
      </motion.div>
    </section>
  );
}

export default Banner;
