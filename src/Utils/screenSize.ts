"use client";
const window = globalThis;
export const isMobile = () => {
  return window.innerWidth < 640;
};

export const isTablet = () => {
  return window.innerWidth >= 640 && window.innerWidth < 1024;
};

export const isDesktop = () => {
  return window.innerWidth >= 1024 && window.innerWidth < 1440;
};

export const isLargeDesktop = () => {
  return window.innerWidth >= 1440;
};
