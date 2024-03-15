import React from "react";
import { HeadingProps, ImageProps, Jumbotron } from "..";

export interface LandingPageProps {
  backgroundImage: ImageProps;
  heading: HeadingProps;
  children: React.ReactNode;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  children,
  backgroundImage,
}) => {
  return (
    <div className="w-full">
      <Jumbotron backgroundImage={backgroundImage}>
        <div className="flex flex-col items-center justify-center h-full">
          {children}
        </div>
      </Jumbotron>
    </div>
  );
};
