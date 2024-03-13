import { classed } from "@tw-classed/react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Centered = classed((props: WrapperProps) => {
  return <div {...props} />;
}, "flex justify-center items-center h-full w-full");
