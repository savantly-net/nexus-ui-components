import type { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "../../../lib/components/typography/Paragraph";

import "../../index.css";
import { commonArgTypes } from "../story-utils";

const meta: Meta = {
  title: "Typography/Paragraph",
  component: Paragraph,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: commonArgTypes.color,
    size: commonArgTypes.size,
  },
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui eget nunc lacinia lacinia sit amet nec nunc",
    color: "dark",
    size: "md",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
