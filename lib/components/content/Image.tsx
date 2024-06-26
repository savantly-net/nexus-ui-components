import { classed } from "@tw-classed/react";
import { ComponentPropsWithoutRef } from "react";

const ClassedImage = classed("img", {
  variants: {
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },
    responsive: {
      true: "w-full h-auto",
    },
    transition: {
      none: "transition-none",
      sm: "hover:transition-all duration-100",
      md: "hover:transition-all duration-300",
      lg: "hover:transition-all duration-500",
      xl: "hover:transition-all duration-700",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    rounded: "md",
    shadow: "none",
  },
});

export type ImageProps = ComponentPropsWithoutRef<typeof ClassedImage>;

export const Image = (props: ImageProps) => {
  return <ClassedImage {...props} />;
};
