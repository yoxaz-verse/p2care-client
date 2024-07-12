import { navbar } from "@nextui-org/react";
import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const { colors } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {},
        },
        dark: {
          layout: {},
          colors: {},
        },
        custom: {
          extend: "light",
          layout: {
            header: {
              maxWidth: "1440px",
            },
          },
          colors: {
            background: "#ffffff",
            foreground: "black",
            primary: {
              "50": "#ECF4FF",
              "100": "#D9E8FE",
              "200": "#B2D2FE",
              "300": "#8CBBFD",
              "400": "#65A5FD",
              "500": "#3F8EFC",
              "600": "#3273CD",
              "700": "#26589F",
              "800": "#193E70",
              "900": "#0D2342",
              DEFAULT: "#3F8EFC",
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#8ED2CF",
              foreground: "#ffffff",
            },
            accent: {
              DEFAULT: "#F45B69",
              foreground: "#ffffff",
            },
            light: {
              DEFAULT: "#FDFDFD",
              foreground: "#000000",
            },
            dark: {
              DEFAULT: "#202020",
              foreground: "#ffffff",
            },
            grey: {
              DEFAULT: "#90A4AE",
              foreground: "#000000",
            },
            bodyText: {
              DEFAULT: "#3C4959",
            },
            focus: "#F182F6",
          },
          linearGradientColors: {
            "primary-gradient": "linear-gradient(to right, #3F8EFC, #F45B69)",
            "secondary-gradient": "linear-gradient(to right, #8ED2CF, #3F8EFC)",
          },
        },
      },
    }),
  ],
};
export default config;
