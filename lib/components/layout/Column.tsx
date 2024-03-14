import { classed } from "@tw-classed/react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Column = classed((props: WrapperProps) => {
  return <div {...props} />;
}, "flex flex-col", {
  variants: {
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    align: "start",
    justify: "start",
  },
});
