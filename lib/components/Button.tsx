import { classed } from "@tw-classed/react";

export const Button = classed("button", {
  variants: {
    variant: {
      solid: "",
      outline: "border-2",
    },
    color: {
      primary: "text-primary-text bg-primary hover:bg-primary/80 hover:shadow-lg active:shadow-inner focus:bg-primary/90",
      secondary: "text-secondary-text bg-secondary hover:bg-secondary/80 hover:shadow-lg active:shadow-inner focus:bg-secondary/90",
      tertiary: "text-tertiary-text bg-tertiary hover:bg-tertiary/80 hover:shadow-lg active:shadow-inner focus:bg-tertiary/90",
      success: "text-success-text bg-success hover:bg-success/80 hover:shadow-lg active:shadow-inner focus:bg-success/90",
      danger: "text-danger-text bg-danger hover:bg-danger/80 hover:shadow-lg active:shadow-inner focus:bg-danger/90",
      warning: "text-warning-text bg-warning hover:bg-warning/80 hover:shadow-lg active:shadow-inner focus:bg-warning/90",
      info: "text-info-text bg-info hover:bg-info/80 hover:shadow-lg active:shadow-inner active:shadow-inner focus:bg-info/90",
      light: "text-light-text text-dark bg-light hover:bg-dark/20 hover:shadow-lg active:shadow-inner",
      dark: "text-dark-text text-light bg-dark hover:bg-dark/80 hover:shadow-lg active:shadow-inner",
    },
    size: {
      sm: "p-1",
      md: "p-3",
      lg: "p-4",
    },
    rounded: {
      none: "rounded-none",
      md: "rounded-md",
    },
    transition: {
      none: "transition-none",
      sm: "hover:transition-all duration-100",
      md: "hover:transition-all duration-300",
      lg: "hover:transition-all duration-500",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
    }
  },
  compoundVariants: [],
  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "md",
    rounded: "md",
    transition: "md",
    shadow: "md",
  },
});
