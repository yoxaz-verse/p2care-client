"use client";
import React, { useEffect, useState } from "react";
import { bannerBackground, doctor, smallArrowIcon } from "@/content/assets";
import { motion, useAnimate } from "framer-motion";
import {
  isDesktop,
  isLargeDesktop,
  isMobile,
  isTablet,
} from "@/utils/screenSize";
import Image from "next/image";
import Points from "./points";
import { pointsLeft, pointsRight } from "@/content/Home/banner";
import CtaButton from "../Buttons/ctaButton";
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
            : -500,
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
          ? -75
          : -75,
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
      <div className="flex">
        <motion.div
          className="flex flex-col gap-5"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1],
            x: isMobile()
              ? 0
              : isTablet()
              ? 180
              : isDesktop()
              ? 300
              : isLargeDesktop()
              ? 450
              : 450,
            y: isMobile()
              ? 0
              : isTablet()
              ? -50
              : isDesktop()
              ? -70
              : isLargeDesktop()
              ? -90
              : 0,
          }}
          transition={{
            duration: 1,
            type: "spring",
            delay: 0.5,
          }}
        >
          {pointsRight.map((point, index) => (
            <motion.div
              key={index}
              animate={{
                x: isMobile()
                  ? 0
                  : isTablet()
                  ? index * 10
                  : isDesktop()
                  ? index * 15
                  : isLargeDesktop()
                  ? index * 20
                  : index * 20,
                opacity: [0, 1],
              }}
              transition={{
                duration: 1,
                type: "spring",
                delay: (index + 1) * 0.5,
              }}
            >
              <Points
                point={point.point}
                icon={point.icon}
                background={point.background}
              />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-col gap-5"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 1],
            x: isMobile()
              ? 0
              : isTablet()
              ? -180
              : isDesktop()
              ? -300
              : isLargeDesktop()
              ? -450
              : -450,
            y: isMobile()
              ? 0
              : isTablet()
              ? -50
              : isDesktop()
              ? -70
              : isLargeDesktop()
              ? -90
              : 0,
          }}
          transition={{
            duration: 1,
            type: "spring",
            delay: 0.5,
          }}
        >
          {pointsLeft.map((point, index) => (
            <motion.div
              key={index}
              animate={{
                x: isMobile()
                  ? 0
                  : isTablet()
                  ? index * -10
                  : isDesktop()
                  ? index * -15
                  : isLargeDesktop()
                  ? index * -20
                  : index * -20,
                opacity: [0, 1],
              }}
              transition={{
                duration: 1,
                type: "spring",
                delay: (index + 1) * 0.5,
              }}
            >
              <Points
                point={point.point}
                icon={point.icon}
                background={point.background}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="flex w-full justify-between px-14  ">
        <h4 className="text-white font-[500] max-w-64">
          If you are seeking a user-friendly and innovative way to manage
          medical records, P2Care is the ideal solution.
        </h4>
        <div className="mt-auto">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}

export default Banner;
