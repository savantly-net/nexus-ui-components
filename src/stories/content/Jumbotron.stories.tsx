import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Centered,
  Column,
  Heading,
  Image,
  ImageProps,
  Jumbotron,
  MaskProps,
  Paragraph,
} from "../../../lib/components";
import "../../index.css";

const meta: Meta = {
  title: "Content/Jumbotron",
  component: Jumbotron,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Jumbotron>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    backgroundImage: {
      src: "https://picsum.photos/1024/768",
      alt: "Placeholder Image",
    } as ImageProps,
    backgroundMask: {
      opacity: 50,
      color: "dark",
    } as MaskProps,
    children: (
      <Centered>
        <Column align="center">
          <Heading color="light">
            Are you ready to build something great?
          </Heading>
          <Button color="primary" size="xl">
            Yes!
          </Button>
        </Column>
      </Centered>
    ),
  },
};

export const FullScreen: Story = {
  args: {
    size: "screen",
    backgroundImage: {
      src: "https://picsum.photos/1024/768",
      alt: "Placeholder Image",
    } as ImageProps,
    backgroundMask: {
      opacity: 50,
      color: "dark",
    } as MaskProps,
    children: (
      <Centered>
        <Heading color="light" size="xl">
          Let's build together
        </Heading>
      </Centered>
    ),
  },
};

export const WithImage: Story = {
  args: {
    children: (
      <div className="grid grid-cols-2 gap-4 p-8">
        <Image src="https://picsum.photos/1024/768" alt="Placeholder Image" />
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Paragraph>
      </div>
    ),
  },
};

export const WithColorGradient: Story = {
  args: {
    className: "bg-gradient-to-r from-blue-500 to-blue-700",
    children: "Example Jumbotron",
  },
};

export const Plain: Story = {
  args: {
    children: "Example Jumbotron",
  },
};
