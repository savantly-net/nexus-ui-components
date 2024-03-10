import { classed } from "@tw-classed/react";

export const Button = classed("button", {
  variants: {
    color: {
      primary: "btn-primary bg-primary",
      secondary: "btn-secondary bg-secondary",
      success: "btn-success bg-success",
      danger: "btn-danger bg-danger",
      warning: "btn-warning bg-warning",
      info: "btn-info bg-info",
      light: "btn-light bg-light",
      dark: "btn-dark bg-dark",
      link: "btn-link bg-link",
    },
    size: {
      sm: "btn-sm",
      md: "btn-md p-3",
      lg: "btn-lg p-4",
    },
    rounded: {
      none: "rounded-none",
      md: "rounded-md",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    rounded: "md",
  },
});
