import React from "react";
import { HeroScreen, HeroScreenMask } from "..";

export interface LandingPageProps {
  background: string;
  children: React.ReactNode;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  children,
  background,
}) => {
  return (
    <div className="w-full">
      <HeroScreen>
        <HeroScreenMask background={background} opacity={50} color="dark">
            {children}
        </HeroScreenMask>
      </HeroScreen>
    </div>
  );
};
