import { classed } from "@tw-classed/react";

export const Button = classed("button", "hover:shadow-lg", "active:shadow-inner",  {
  variants: {
    variant: {
      solid: "",
      outline: "border-2",
    },
    color: {
      primary: "",
      secondary: "",
      tertiary: "",
      success: "",
      danger: "",
      warning: "",
      info: "",
      light: "",
      dark: "",
    },
    size: {
      sm: "p-1",
      md: "p-3",
      lg: "p-4",
      xl: "p-6",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    transition: {
      none: "transition-none",
      sm: "hover:transition-all duration-100",
      md: "hover:transition-all duration-300",
      lg: "hover:transition-all duration-500",
      xl: "hover:transition-all duration-700",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "primary",
      class: "text-primary-text bg-primary hover:bg-primary/80 focus:bg-primary/90",
    },
    {
      variant: "solid",
      color: "secondary",
      class: "text-secondary-text bg-secondary hover:bg-secondary/80 focus:bg-secondary/90",
    },
    {
      variant: "solid",
      color: "tertiary",
      class: "text-tertiary-text bg-tertiary hover:bg-tertiary/80 focus:bg-tertiary/90",
    },
    {
      variant: "solid",
      color: "success",
      class: "text-success-text bg-success hover:bg-success/80 focus:bg-success/90",
    },
    {
      variant: "solid",
      color: "danger",
      class: "text-danger-text bg-danger hover:bg-danger/80 focus:bg-danger/90",
    },
    {
      variant: "solid",
      color: "warning",
      class: "text-warning-text bg-warning hover:bg-warning/80 focus:bg-warning/90",
    },
    {
      variant: "solid",
      color: "info",
      class: "text-info-text bg-info hover:bg-info/80 focus:bg-info/90",
    },
    {
      variant: "solid",
      color: "light",
      class: "text-light-text bg-light hover:bg-dark/20",
    },
    {
      variant: "solid",
      color: "dark",
      class: "text-dark-text bg-dark hover:bg-dark/80",
    },
    {
      variant: "outline",
      color: "primary",
      class: "text-primary border-primary hover:bg-primary/20",
    },
    {
      variant: "outline",
      color: "secondary",
      class: "text-secondary border-secondary hover:bg-secondary/20",
    },
    {
      variant: "outline",
      color: "tertiary",
      class: "text-tertiary border-tertiary hover:bg-tertiary/20",
    },
    {
      variant: "outline",
      color: "success",
      class: "text-success border-success hover:bg-success/20",
    },
    {
      variant: "outline",
      color: "danger",
      class: "text-danger border-danger hover:bg-danger/20",
    },
    {
      variant: "outline",
      color: "warning",
      class: "text-warning border-warning hover:bg-warning/20",
    },
    {
      variant: "outline",
      color: "info",
      class: "text-info border-info hover:bg-info/20",
    },
    {
      variant: "outline",
      color: "light",
      class: "text-light border-light hover:bg-light/20",
    },
    {
      variant: "outline",
      color: "dark",
      class: "text-dark border-dark hover:bg-dark/20",
    }
  ],
  defaultVariants: {
    variant: "solid",
    color: "primary",
    size: "md",
    rounded: "md",
    transition: "md",
    shadow: "md",
  },
});
