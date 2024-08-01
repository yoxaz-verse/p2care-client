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
import PcBanner from "./PcBanner";
import TabletBanner from "./TabletBanner";
import MobileBanner from "./MobileBanner";

function Banner({ onOpen }: any) {
  const [isRendered, setIsRendered] = useState<boolean>(false);
  useEffect(() => {
    //  handleAnimation();
    setIsRendered(true);
  }, []);
  return (
    <>
      <PcBanner onOpen={onOpen} />
      <TabletBanner onOpen={onOpen} />
      <MobileBanner onOpen={onOpen} />
    </>
  );
}

export default Banner;
