import { classed } from "@tw-classed/react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Column = classed((props: WrapperProps) => {
  return <div {...props} />;
}, "flex flex-col");
