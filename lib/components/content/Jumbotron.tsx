import { classed } from "@tw-classed/react";
import { Image, ImageProps } from "./Image";
import { Mask, MaskProps } from "./Mask";

const ClassedJumbotron = classed.section({
  variants: {
    size: {
      sm: "mb-4 min-h-64",
      md: "mb-8 min-h-96",
      lg: "mb-12 min-h-128",
      xl: "mb-16 min-h-144",
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
  backgroundMask?: MaskProps;
};

export const Jumbotron = (props: JumbotronProps) => {
  const { backgroundImage, backgroundMask, children, ...rest } = props;

  const withBackground = backgroundImage && (
    <Mask
      rounded="none"
      {...backgroundMask}
      className="h-full"
      background={
        <Image
          rounded="none"
          {...backgroundImage}
          className="object-cover h-full"
        />
      }
    >
      {children}
    </Mask>
  );

  return (
    <ClassedJumbotron {...rest}>{withBackground || children}</ClassedJumbotron>
  );
};
