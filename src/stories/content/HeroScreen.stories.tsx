import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Centered,
  Column,
  Heading,
  HeroScreen,
  HeroScreenImage,
  HeroScreenMask,
} from "../../../lib/components";
import "../../index.css";

const meta: Meta = {
  title: "Content/HeroScreen",
  component: HeroScreen,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {},
} satisfies Meta<typeof HeroScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    children: (
      <HeroScreenMask
        background={<HeroScreenImage src="https://picsum.photos/1024/768" />}
      >
        <Centered>
          <Column>
            <Heading color="light">
              Are you ready to build something great?
            </Heading>
            <Button color="primary" size="xl">Yes!</Button>
          </Column>
        </Centered>
      </HeroScreenMask>
    ),
  },
};

export const WithImage: Story = {
  args: {
    children: (
      <HeroScreenImage
        src="https://picsum.photos/1024/768"
        alt="Placeholder Image"
      />
    ),
  },
};

export const WithColor: Story = {
  args: {
    className: "bg-gradient-to-r from-blue-500 to-blue-700",
    children: "Example HeroScreen",
  },
};

export const Plain: Story = {
    args: {
      children: "Example HeroScreen",
    },
  };