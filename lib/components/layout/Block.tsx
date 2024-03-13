import { classed } from "@tw-classed/react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Block = classed.div((props: WrapperProps) => {
  return <div {...props} />;
}, {
  variants: {
    layout: {
      "one-column": "grid-cols-1",
    }
  },
});
