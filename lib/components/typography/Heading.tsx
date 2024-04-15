import { classed } from "@tw-classed/react";
import type { ComponentProps } from "react";

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
    responsive: {
      true: "xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
      false: "",
    }
  },
  compoundVariants: [],
  defaultVariants: {
    color: "primary",
    size: "md",
    responsive: true,
  },
});

export interface HeadingProps extends ComponentProps<typeof Heading> {}
