import { classed } from "@tw-classed/react";
import { Image, ImageProps } from "./Image";
import { Mask, MaskProps } from "./Mask";

const ClassedJumbotron = classed.section({
  variants: {
    size: {
      sm: "min-h-64",
      md: "min-h-96",
      lg: "min-h-128",
      xl: "min-h-144",
      screen: "h-screen",
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
    centered: {
      true: "flex items-center justify-center",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    color: "primary",
    centered: true,
  },
});

export type JumbotronProps = React.ComponentPropsWithoutRef<
  typeof ClassedJumbotron
> & {
  backgroundImage?: ImageProps;
  backgroundMask?: Omit<MaskProps, 'background'>;
};

export const Jumbotron = (props: JumbotronProps) => {
  const { backgroundImage, backgroundMask, children, className, ...rest } = props;

  const withBackground = backgroundImage && (
    <Mask
      rounded="none"
      {...backgroundMask}
      className={`h-full ${backgroundMask?.className}`}
      background={
        <Image
          rounded="none"
          {...backgroundImage}
          className={`object-cover h-full ${backgroundImage.className}`}
        />
      }
    >
      {children}
    </Mask>
  );

  return (
    <ClassedJumbotron className={className} {...rest}>{withBackground || children}</ClassedJumbotron>
  );
};
