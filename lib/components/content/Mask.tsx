import { classed } from "@tw-classed/react";
import { ComponentPropsWithoutRef } from "react";
import { ColorType } from "../types";

const ClassedMask = classed(
  "div",
  "relative overflow-hidden bg-cover bg-no-repeat bg-center",
  {
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
  }
);

const defaultMaskProps = {
  opacity: 50,
  color: "dark",
};

export type MaskProps = ComponentPropsWithoutRef<typeof ClassedMask> & {
  background: React.ReactNode;
  opacity?: number;
  color?: ColorType | 'none';
}

export const Mask = (props: MaskProps) => {
  const { children, background, opacity, color, ...rest } = props;
  const Child = children || <div />;

  const maskColorClassname = `bg-${color || defaultMaskProps.color}`;
  const maskOpacityValue = (opacity || defaultMaskProps.opacity) / 100;

  return (
    <ClassedMask {...rest}>
      {background}
      <div
        style={{ opacity: maskOpacityValue }}
        className={`absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed ${maskColorClassname}`}
      ></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full">
        {Child}
      </div>
    </ClassedMask>
  );
};
