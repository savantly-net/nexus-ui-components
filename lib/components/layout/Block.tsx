import { classed } from "@tw-classed/react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Block = classed(
  (props: WrapperProps) => {
    return <div {...props} />;
  },
  "w-full",
  {
    variants: {
      size: {
        sm: "p-4 mb-4",
        md: "p-8 mb-8",
        lg: "p-12 mb-12",
        xl: "p-16 mb-16",
      },
      color: {
        none: "",
        primary: "bg-primary",
        secondary: "bg-secondary",
        tertiary: "bg-tertiary",
        success: "bg-success",
        danger: "bg-danger",
        warning: "bg-warning",
        info: "bg-info",
        light: "bg-light",
        dark: "bg-dark",
      },
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      size: "md",
      color: "primary",
      shadow: "none",
    },
  }
);

export interface BlockProps extends React.ComponentProps<typeof Block> {}
