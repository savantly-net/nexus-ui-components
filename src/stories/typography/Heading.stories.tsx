import type { Meta, StoryObj } from "@storybook/react";

import { Heading } from "../../../lib/main";
import "../../index.css";
import { commonArgTypes } from "../story-utils";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Typography/Heading",
  component: Heading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    color: commonArgTypes.color,
    size: commonArgTypes.size,
  },
  args: {
    children: "Example Heading",
    color: "primary",
    size: "xl",
    responsive: false
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};

export const Responsive: Story = {
  args: {
    color: "dark",
    responsive: true,
  },
};