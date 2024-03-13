import type { Meta, StoryObj } from "@storybook/react";

import "../../index.css";
import { Centered, Heading } from "../../../lib/main";

const meta: Meta = {
  title: "Layout/Centered",
  component: Centered,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "The content to center",
      control: {
        type: "object",
      },
    },
  },
  args: {
    children: <Heading>Centered content using flex box</Heading>,
  },
  render: (args) => <Centered {...args} />,
} satisfies Meta<typeof Centered>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Heading>Centered content using flex box</Heading>,
  },
};
