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
    label:'TextFields',
    fontColor:'black',
    maxLength: 11, 
    placeholder:'hello' 
  },
};

export const Small: Story = {
  args: {
    label:'TextFields',
    fontColor:'black',
    fontSize:'12px',
    maxLength: 11,
    placeholder:'hello'
  },
}

export const Large: Story = {
  args: {
    label:'TextFields',
    fontColor:'black',
    fontSize:'20px',
    maxLength: 11,
    placeholder:'hello'
  },
};
