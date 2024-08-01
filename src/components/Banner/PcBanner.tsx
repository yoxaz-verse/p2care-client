"use client";
import { bannerBackground, doctor } from "@/Content/assets";
import { pointsLeft, pointsRight } from "@/Content/Home/banner";
import { isDesktop, isLargeDesktop, isMobile, isTablet } from "@/Utils/screenSize";
import { Image } from "@nextui-org/react";
import { animate, motion, useAnimate } from "framer-motion";
import Points from "./points";
import CtaButton from "../Buttons/ctaButton";
import { useState, useEffect } from "react";

export default function PcBanner({ onOpen }: any) {
  const [scope, animate] = useAnimate();
  const [isRendered, setIsRendered] = useState<boolean>(false);

  useEffect(() => {
    //handleAnimation();
    setIsRendered(true);
  }, []);

  return (
    <>
      <section
        className="bg-cover bg-center  h-[700px] hidden relative lg:flex flex-col  border border-black items-center align-middle rounded-[30px] lg:rounded-[70px]"
        style={{ backgroundImage: `url(${bannerBackground})` }}
      >
        <motion.h1
          initial={{
            opacity: 0,
          }}
          className="text-[#C6DEFD] self-center font-[700] text-[55px] md:text-[115px] lg:text-[150px] xl:text-[200px]"
        >
          p2care
        </motion.h1>
        <Image
          src={doctor}
          alt="P2Care Logo"
          width={1000}
          height={1000}
          className={`max-w-max h-[500px] -top-[100px] -left-[150px] absolute  ${isMobile() || isTablet() ? "left-0" : ""
            }
          transition delay-500 duration-1000 ease-in-out opacity-${isRendered ? 100 : 0
            }`}
        />
        <div className={`flex`}>
          <motion.div
            className="flex flex-col gap-2 lg:gap-5"
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
            {pointsRight.map((point: any, index: any) => (
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
            className={`flex flex-col  gap-2 lg:gap-5  mr-2
              }`}
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
        <div
          className={`flex flex-col justify-between lg:px-14 ${isMobile() || isTablet()
            ? "flex-col items-end py-2"
            : "w-full items-end justify-center"
            } `}
        >
          <h4 className="flex flex-row text-white font-[500] max-w-64 text-[8px] md:text-[12px] lg:text-[16px]  font-bold">
            If you are seeking a user-friendly and innovative way to manage
            medical records, P2Care is the ideal solution.
          </h4>
          <div className="lg:mt-auto">
            <CtaButton onOpen={onOpen} />
          </div>
        </div>
      </section>

    </>
  )
}
