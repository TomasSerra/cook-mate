import Input from "./Input";

import type { Meta, StoryObj } from '@storybook/react';


const meta = {
  title: 'Common/Input',
  component: Input,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    label: {
        control: 'text',
        defaultValue: 'Input',
    },
    value: {
        control: 'text',
        defaultValue: '',
    },
    placeholder: {
        control: 'text',
        defaultValue: 'Enter text',
    },
    variant: {
        control: 'select',
        options: ['email', 'name', 'location'],
    },
    type: {
        control: 'select',
        options: ['text', 'password', 'select'],
    },
    width: {
      control: 'text',
        defaultValue: '300px',
    },
    disabled: {
        control: 'boolean',
        defaultValue: false,
    },
    options: {
        control: { type: 'object' }, 
      defaultValue: ['Option 1', 'Option 2', 'Option 3'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimarySolidLg: Story = {
  args: {
    type: 'text',
    variant: 'email',
    label: 'Email',
    placeholder: 'Enter email',
    width: '300px',
    disabled: false,
  },
};
