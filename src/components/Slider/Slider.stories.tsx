// src/components/Slider/Slider.stories.tsx
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
    <Slider
      {...args}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    />
  );
};

/* =======================================
 * === A HISTÓRIA 1: DARK MODE ===
 * =======================================
 */
export const DarkMode: Story = {
  // name: 'Dark Mode', // <-- APAGUE ESTA LINHA
  render: SliderWithState,
  args: {
    min: 0,
    max: 100,
    mode: 'dark', 
  },
};

/* =======================================
 * === A HISTÓRIA 2: LIGHT MODE ===
 * =======================================
 */
export const LightMode: Story = {
  // name: 'Light Mode', // <-- APAGUE ESTA LINHA
  render: SliderWithState,
  args: {
    min: 0,
    max: 100,
    mode: 'light',
  },
};