"use client";
import { bannerBackground, doctor } from "@/Content/assets";
import { pointsLeft, pointsRight } from "@/Content/Home/banner";
import { isDesktop, isLargeDesktop, isMobile, isTablet } from "@/Utils/screenSize";
import { Image } from "@nextui-org/react";
import { animate, motion, useAnimate } from "framer-motion";
import Points from "./points";
import CtaButton from "../Buttons/ctaButton";
import { useState, useEffect } from "react";


export default function MobileBanner({ onOpen }: any) {
  const [isRendered, setIsRendered] = useState<boolean>(false);
  useEffect(() => {
    //  handleAnimation();
    setIsRendered(true);
  }, []);

  return (
    <>
      <section
        className="relative block  md:hidden bg-cover bg-center h-[300px]  rounded-[30px] "
        style={{ backgroundImage: `url(${bannerBackground})` }}
      >
        <h1 className="text-[#C6DEFD] text-center font-[700] text-[55px]">
          p2care
        </h1>
        <Image
          src={doctor}
          alt="Doctor Banner"
          width={1000}
          height={1000}
          className={`w-auto h-[230px] absolute -top-[12px] transition delay-500 duration-1000 ease-in-out opacity-${isRendered ? 100 : 0
            }`}
        />
        <div className="flex flex-col justify-between w-full h-[200px] items-end ">
          <div className="flex gap-8 me-8">
            <motion.div
              className="hidden md:flex flex-col gap-2 md:gap-5"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1],
                x: isMobile()
                  ? 0
                  : isTablet()
                    ? 0
                    : isDesktop()
                      ? -300
                      : isLargeDesktop()
                        ? -450
                        : -450,
                y: isMobile()
                  ? 0
                  : isTablet()
                    ? 0
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
              {pointsRight.map((point: any, index: any) => (
                <motion.div
                  key={index}
                  animate={{
                    x: isMobile()
                      ? 0
                      : isTablet()
                        ? 0
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

            <motion.div
              className="flex flex-col gap-2 md:gap-5"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1],
                x: isMobile()
                  ? 0
                  : isTablet()
                    ? 0
                    : isDesktop()
                      ? -300
                      : isLargeDesktop()
                        ? -450
                        : -450,
                y: isMobile()
                  ? 0
                  : isTablet()
                    ? 0
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
              {pointsLeft.map((point: any, index: any) => (
                <motion.div
                  key={index}
                  animate={{
                    x: isMobile()
                      ? 0
                      : isTablet()
                        ? 0
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
          <h4 className="text-white text-[8px] uppercase text-right font-[500] w-[180px] me-5">
            If you are seeking a user-friendly and innovative way to manage
            medical records, P2Care is the ideal solution.
          </h4>
          <CtaButton onOpen={onOpen} />
        </div>
      </section>
    </>
  )
}
