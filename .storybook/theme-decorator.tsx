import { DecoratorFunction } from "@storybook/addon-essentials";
import { ReactRenderer } from "@storybook/react";
import React from "react";
import "../src/index.css";

export const themeDecorator: DecoratorFunction<
  ReactRenderer,
  { [x: string]: any }
> = (Story: any) => {
  return (
    <Story />
  );
};
