
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './Slider';
import { useState } from 'react';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const SliderWithState = (args: Story['args']) => {
  const [value, setValue] = useState(50); 
  return (
    <div style={{ width: '444px' }}> 
      <Slider
        {...args}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </div>
  );
};


export const DarkMode: Story = {
  render: SliderWithState,
  args: {
    min: 0,
    max: 100,
    mode: 'dark', 
  },
};


export const LightMode: Story = {
  render: SliderWithState,
  args: {
    min: 0,
    max: 100,
    mode: 'light',
  },
};