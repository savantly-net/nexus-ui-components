import type { Preview } from "@storybook/react";
import { themeDecorator } from "./theme-decorator";

const preview: Preview = {
  decorators: [
    themeDecorator,
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        date: /Date$/i,
      },
    },
  },
};

export default preview;
