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
        aniOriginal: {
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
          "neutral":  "#0A2463",//100/
          "accent": "#FFC482",// 300/
          "secondary": "#FFC482",//400/
          "primary": "#F9C846",//500/
          "base-100": "#D7E8BA",//800/
          "base-200":"#FFB35C",//900/
          "base-300":"#FFF8E8",// 950/
          "neutral-content":"#9D96B8",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};

export default config;
