import { colorOptions, roundedCornerOptions, shadowOptions, sizeOptions, transitionOptions } from "../../lib/components/types";

export const commonArgTypes = {
  color: {
    control: {
      type: "select",
    },
    options: colorOptions,
  },
  size: {
    control: {
      type: "select",
    },
    options: sizeOptions,
  },
  rounded: {
    control: {
      type: "select",
    },
    options: roundedCornerOptions,
  },
  shadow: {
    control: {
      type: "select",
    },
    options: shadowOptions,
  },
  transition: {
    control: {
      type: "select",
    },
    options: transitionOptions,
  },
};
