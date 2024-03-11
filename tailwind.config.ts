/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import { nexusThemeConfig } from "./lib/components/nexusThemeConfig";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: nexusThemeConfig.colors,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
