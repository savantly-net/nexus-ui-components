import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "../../../../lib/components/content/image";
import "../../../index.css";
import { commonArgTypes } from "../../story-utils";

const meta: Meta = {
  title: "Content/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
    alt: {
      control: {
        type: "text",
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    rounded: commonArgTypes.rounded,
    shadow: commonArgTypes.shadow,
    transition: commonArgTypes.transition,
  },
  args: {
    src: "https://picsum.photos/500",
    alt: "Placeholder Image",
    width: "250px",
    height: "250px",
    rounded: "md",
    transition: "md",
    shadow: "md",
    responsive: false,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Responsive: Story = {
  args: {
    responsive: true,
  },
};

export const Rounded: Story = {
  args: {
    rounded: "full",
  },
};

export const ShadowLarge: Story = {
  args: {
    shadow: "xl",
  },
};
