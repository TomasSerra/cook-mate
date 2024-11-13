import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import RecipePage from './RecipePage';

const meta: Meta<typeof RecipePage> = {
  title: 'Pages/RecipePage',
  component: RecipePage,
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const RecipePageDefault: Story = {
  render: () => <RecipePage />,
};
