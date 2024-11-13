import ImageCarrousel from './ImageCarrousel';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ImageCarrousel> = {
    title: 'UI/Header/ImageCarrousel',
    component: ImageCarrousel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        images: {
          control: 'text'
        }
    },
};
export default meta;

type Story = StoryObj<typeof ImageCarrousel>;

export const ImageCarrouselDefault: Story = {
    args: {
      images: [
        "https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        "https://th.bing.com/th/id/OIP.74L1tQJeO5RJeCqyLFyWPAHaFb?w=246&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      ],
    },
    render: (args) => (
      <div style={{ width: '500px' }}>
          <ImageCarrousel {...args} />
      </div>
  ),
};

