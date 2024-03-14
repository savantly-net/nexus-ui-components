import { classed } from "@tw-classed/react";

export const Button = classed("button", "active:shadow-inner",  {
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
      sm: "p-1 text-sm min-w-24",
      md: "p-3 text-md min-w-32",
      lg: "p-4 text-lg min-w-40",
      xl: "p-6 text-xl min-w-48",
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
      class: "text-primary-text bg-primary hover:bg-primary-400 focus:bg-primary-400 hover:shadow-primary-400/50",
    },
    {
      variant: "solid",
      color: "secondary",
      class: "text-secondary-text bg-secondary hover:bg-secondary-400 focus:bg-secondary-400 hover:shadow-secondary-400/50",
    },
    {
      variant: "solid",
      color: "tertiary",
      class: "text-tertiary-text bg-tertiary hover:bg-tertiary-400 focus:bg-tertiary-400 hover:shadow-tertiary-400/50",
    },
    {
      variant: "solid",
      color: "success",
      class: "text-success-text bg-success hover:bg-success-400 focus:bg-success-400 hover:shadow-success-400/50",
    },
    {
      variant: "solid",
      color: "danger",
      class: "text-danger-text bg-danger hover:bg-danger-400 focus:bg-danger-400 hover:shadow-danger-400/50",
    },
    {
      variant: "solid",
      color: "warning",
      class: "text-warning-text bg-warning hover:bg-warning-400 focus:bg-warning-400 hover:shadow-warning-400/50",
    },
    {
      variant: "solid",
      color: "info",
      class: "text-info-text bg-info hover:bg-info-400 focus:bg-info-400 hover:shadow-info-400/50",
    },
    {
      variant: "solid",
      color: "light",
      class: "text-light-text bg-light hover:bg-dark/10 focus:bg-dark/10 hover:shadow-dark/50",
    },
    {
      variant: "solid",
      color: "dark",
      class: "text-dark-text bg-dark hover:bg-dark/80 focus:bg-dark/80 hover:shadow-dark/50",
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
