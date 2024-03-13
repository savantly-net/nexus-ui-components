import type { Meta, StoryObj } from "@storybook/react";

import { Centered, Heading } from "../../../../lib/components";
import { Mask } from "../../../../lib/components";
import "../../../index.css";
import { commonArgTypes } from "../../story-utils";

const meta: Meta = {
  title: "Content/Mask",
  component: Mask,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: {
      control: {
        type: "object",
      },
    },
    opacity: commonArgTypes.opacity,
    color: commonArgTypes.color,
    rounded: commonArgTypes.rounded,
    shadow: commonArgTypes.shadow,
    transition: commonArgTypes.transition,
  },
  args: {
    background: <img src="https://picsum.photos/500" alt="Placeholder Image" />,
  },
} satisfies Meta<typeof Mask>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithOverlay: Story = {
  args: {
    children: (
      <Centered>
        <Heading color="light">The children are overlay content</Heading>
      </Centered>
    ),
  },
};

export const Customized: Story = {
  args: {
    opacity: 60,
    color: "dark",
    rounded: "full",
    transition: "md",
    shadow: "xl",
    children: (
      <Centered>
        <Heading color="light">Customizing different options</Heading>
      </Centered>
    ),
  },
};
