import type { Meta, StoryObj } from "@storybook/react";

import { ErrorComponent } from "../../../lib/main";
import "../../index.css";
import { commonArgTypes } from "../story-utils";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Content/Error",
  component: ErrorComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "outline"],
    },
    color: commonArgTypes.color,
    size: commonArgTypes.size,
    rounded: commonArgTypes.rounded,
    shadow: commonArgTypes.shadow,
    transition: commonArgTypes.transition,
  },
  args: {
    children: "Example ErrorComponent",
    variant: "solid",
    disabled: false,
    rounded: "md",
    transition: "md",
    shadow: "md",
  },
} satisfies Meta<typeof ErrorComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};

export const Warning: Story = {
  args: {
    color: "warning",
  },
};

export const Danger: Story = {
  args: {
    color: "danger",
  },
};

export const Info: Story = {
  args: {
    color: "info",
  },
};

export const Light: Story = {
  args: {
    color: "light",
  },
};

export const Dark: Story = {
  args: {
    color: "dark",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};
