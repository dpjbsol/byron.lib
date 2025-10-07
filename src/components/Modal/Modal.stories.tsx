import type { Meta, StoryObj } from "@storybook/react";
import Modal from ".";

const meta = {
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "dark", "light"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    children: { control: "text" },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Modal padrão
export const Default: Story = {
  args: {
    isOpen: true,
    variant: "default",
    children: "Conteúdo do modal padrão",
    onClose: () => alert("Fechado"),
    onConfirm: () => alert("Confirmado!"),
  },
};

// Modal Primary
export const Primary: Story = {
  args: {
    isOpen: true,
    variant: "primary",
    children: "Conteúdo do modal primário",
    onClose: () => alert("Fechado"),
    onConfirm: () => alert("Confirmado!"),
  },
};

// Modal Dark
export const Dark: Story = {
  args: {
    isOpen: true,
    variant: "dark",
    children: "Conteúdo do modal dark",
    onClose: () => alert("Fechado"),
    onConfirm: () => alert("Confirmado!"),
  },
};

// Modal light
export const Light: Story = {
  args: {
    isOpen: true,
    variant: "light",
    children: "Conteúdo do modal light",
    onClose: () => alert("Fechado"),
    onConfirm: () => alert("Confirmado!"),
  },
};