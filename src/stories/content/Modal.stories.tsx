import type { Meta, StoryObj } from "@storybook/react";

import { Button, Modal, Paragraph } from "../../../lib/main";
import "../../index.css";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Content/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    isOpen: true,
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div
        style={{
          height: "400px",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    children: <p>This is a modal</p>,
  },
};

export const WithHeader: Story = {
  args: {
    header: "Modal Header",
    children: <p>This is a modal</p>,
  },
};

export const HideHeader: Story = {
  args: {
    hideHeader: true,
    children: <p>This is a modal</p>,
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac
          pretium augue. Duis dapibus ex pretium tincidunt aliquam.
        </Paragraph>
        <hr />
        <div className="mt-2 flex gap-1 justify-end">
          <Button variant="outline">Cancel</Button>
          <Button variant="solid">Save</Button>
        </div>
      </>
    ),
  },
};
