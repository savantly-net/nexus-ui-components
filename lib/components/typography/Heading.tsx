import { classed } from "@tw-classed/react";

export const Heading = classed("h1", {
  variants: {
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
      success: "text-success",
      danger: "text-danger",
      warning: "text-warning",
      info: "text-info",
      light: "text-light",
      dark: "text-dark",
    },
    size: {
      xs: "text-2xl p-2",
      sm: "text-3xl p-3",
      md: "text-4xl p-4",
      lg: "text-5xl p-5",
      xl: "text-6xl p-6",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    color: "primary",
    size: "md",
  },
});
