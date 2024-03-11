import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../lib/main";
import "../index.css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Forms/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    color: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Button",
    color: "tertiary",
  },
};

export const Warning: Story = {
  args: {
    children: "Button",
    color: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "Button",
    color: "danger",
  },
};

export const Success: Story = {
  args: {
    children: "Button",
    color: "success",
  },
};

export const Info: Story = {
  args: {
    children: "Button",
    color: "info",
  },
};

export const Light: Story = {
  args: {
    children: "Button",
    color: "light",
  },
};

export const Dark: Story = {
  args: {
    children: "Button",
    color: "dark",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    children: "Button",
    size: "sm",
  },
};
