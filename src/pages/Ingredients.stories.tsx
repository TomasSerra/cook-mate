import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Ingredients from './Ingredients';

const meta: Meta<typeof Ingredients> = {
  title: 'Pages/Ingredients',
  component: Ingredients,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const IngredientsDefault: Story = {
  render: () => <Ingredients />,
};
