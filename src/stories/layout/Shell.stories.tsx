import type { Meta, StoryObj } from "@storybook/react";

import { Shell } from "../../../lib/main";
import "../../index.css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Layout/Shell",
  component: Shell,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Shell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <div className="text-center p-6">
        <p>Main area</p>
      </div>
    ),
  },
};

export const WithHeader: Story = {
  args: {
    children: (
      <div className="text-center p-6">
        <p>Main area</p>
      </div>
    ),
    header: (
      <div className="bg-blue-100 p-6">
        <p>Header area</p>
      </div>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <div className="text-center p-6">
        <p>Main area</p>
      </div>
    ),
    footer: (
      <div className="bg-gray-100 p-6">
        <p>Footer area</p>
      </div>
    ),
  },
};

export const WithSidebar: Story = {
  args: {
    children: (
      <div className="text-center p-6">
        <p>Main area</p>
      </div>
    ),
    sidebar: (
      <div className="bg-green-100 p-6 h-full">
        <p>Sidebar area</p>
      </div>
    ),
  },
};

export const WithRightSidebar: Story = {
  args: {
    children: (
      <div className="text-center p-6">
        <p>Main area</p>
      </div>
    ),
    rightSidebar: (
      <div className="bg-yellow-100 p-6 h-full">
        <p>Right Sidebar area</p>
      </div>
    ),
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const HolyGrail: Story = {
  args: {
    children: (
      <div className="text-center p-6">
        <p>Main area</p>
      </div>
    ),
    header: (
      <div className="bg-blue-100 p-6">
        <p>Header area</p>
      </div>
    ),
    footer: (
      <div className="bg-gray-100 p-6">
        <p>Footer area</p>
      </div>
    ),
    sidebar: (
      <div className="bg-green-100 p-6 h-full">
        <p>Sidebar area</p>
      </div>
    ),
    rightSidebar: (
      <div className="bg-yellow-100 p-6 h-full">
        <p>Right Sidebar area</p>
      </div>
    ),
  },
};
