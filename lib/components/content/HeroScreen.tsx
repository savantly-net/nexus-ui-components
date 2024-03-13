import { Image, ImageProps } from "./Image";
import { Mask, MaskProps } from "./Mask";

export type HeroScreenProps = React.HTMLAttributes<HTMLDivElement>;

export const HeroScreen = (props: HeroScreenProps) => {
  const { children, className, ...rest } = props;

  const wrapperClassName = `h-screen ${className}`;

  return (
    <div {...rest} className={wrapperClassName}>
      {children}
    </div>
  );
};

export const HeroScreenMask = (props: MaskProps) => {
  return <Mask {...props} className="h-screen" />;
};

export const HeroScreenImage = (props: ImageProps) => {
  return <Image {...props} className="object-cover h-full" />;
};
