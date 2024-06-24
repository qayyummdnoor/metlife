import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from "./TextField";

const meta = {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label:'TextField',
    maxLength: 11, //not sure why not working. all the props showed at storybook
    placeholder:'hello' //not sure why not working. all the props showed at storybook
  },
};
