import type { Meta, StoryObj } from "@storybook/react";
import Carrossel from "./Carrossel";

const meta = {
  component: Carrossel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "Tema do carrossel (claro ou escuro)",
      defaultValue: "light",
    },
  },
} satisfies Meta<typeof Carrossel>;

export default meta;
type Story = StoryObj<typeof meta>;

// Carrossel Light (padrão)
export const Light: Story = {
  args: {
    theme: "light",
  },
};

// Carrossel Dark
export const Dark: Story = {
  args: {
    theme: "dark",
  },
};

// Story com controles interativos
export const Interactive: Story = {
  args: {
    theme: "light",
  },
  parameters: {
    docs: {
      description: {
        story: "Use as setas do teclado (← →) ou clique nos botões laterais para navegar entre os slides. Os indicadores na parte inferior também permitem navegação direta.",
      },
    },
  },
};