import { classed } from "@tw-classed/react";

export const Paragraph = classed("p", {
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
      xs: "text-xs p-2",
      sm: "text-sm p-3",
      md: "text-base p-4",
      lg: "text-lg p-5",
      xl: "text-xl p-6",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    color: "dark",
    size: "md",
  },
});
