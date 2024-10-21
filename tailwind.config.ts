import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px',
        'xs': '480px',
        'xl': '1200px',
        '1xl': '1280px',
        '2xl': '1400px',
        '3xl': '1700px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  daisyui: {
    themes: [
      {
        aniDefault: {
          "neutral":  "#ffedd5",//100
          "accent": "#fdba74",// 300
          "secondary": "#fb923c",//400
          "primary": "#f97316",//500
          "base-100": "#9a3412",//800
          "base-200":"#7c2d12",//900
          "base-300":"#431407",// 950
          "neutral-content":"#0f172a",
        },
        aniDark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "neutral":  "#dbeafe",//100
          "accent": "#93c5fd",// 300
          "secondary": "#60a5fa",//400
          "primary": "#3b82f6",//500
          "base-100": "#1e40af",//800
          "base-200":"#0f172a",//900
          "base-300":"#020617",// 950
          "neutral-content":"#0f172a",
        },
        aniLight: {
          ...require("daisyui/src/theming/themes")["light"],
          "neutral":  "#090909",//100/
          "accent": "#738A80",// 300/
          "secondary": "#9BC4BC",//400/
          "primary": "#4B5043",//500/
          "base-100": "#8DDBE0",//800/
          "base-200":"#A7DCCA",//900/
          "base-300":"#EBFFF5",// 950/
          "neutral-content":"#5D6F68",
        },
        aniPhonke: {
          "neutral":  "#FFFFFF",//100/
          "accent": "#FFBADE",// 300/
          "secondary": "#FFBADE",//400/
          "primary": "#FFBADE",//500/
          "base-100": "#000000",//800/////
          "base-200":"#2B2A3C",//900/
          "base-300":"#201F31",// 950//////
          "neutral-content":"#201F31",
        },
      },
    ],
  },
  plugins: [require('daisyui'),],
};

export default config;
