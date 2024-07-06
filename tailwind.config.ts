import { navbar } from "@nextui-org/react";
import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
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
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        custom: {
          extend: "light", // <- inherit default values from light theme
          layout: {
            header: {
              maxWidth: "1440px",
            },
          },
          colors: {
            background: "#ffffff",
            foreground: "black",
            primary: {
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
            focus: "#F182F6",
          },
        },
      },
    }),
  ],
};
export default config;
