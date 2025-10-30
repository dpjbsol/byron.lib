import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Alert from ".";

const meta = {
  component: Alert,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "error"],
      description: "Variante do alert, pode ser info, success ou error"
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "Tema de cor, pode ser light ou dark"
    },
    title: { 
        control: "text",
        description: "Título do alert"
     },
    description: {
        control: "text", 
        description: "Texto do alert"
    },
  },
  decorators: [
    (Story) => (
      <div className="p-24">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

//Template de acionamento do alerta
const Template: Story["render"] = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="flex gap-16 items-center">
        <button
          onClick={() => setIsOpen(true)} className="rounded-md bg-white border border-neutral-300 font-semibold py-2 px-4 cursor-pointer"
        >
          Mostrar Alerta
        </button>

        <Alert {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
  );
};

// Variantes
export const InfoLight: Story = {
  render: Template,
  args: {
    variant: "info",
    theme: "light",
    title: "Informação",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    isOpen: false,
  },
};

export const InfoDark: Story = {
  render: Template,
  args: {
    variant: "info",
    theme: "dark",
    title: "Informação",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    isOpen: false,
  },
};

export const ErrorLight: Story = {
  render: Template,
  args: {
    variant: "error",
    theme: "light",
    title: "Erro!",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    isOpen: false,
  },
};

export const ErrorDark: Story = {
  render: Template,
  args: {
    variant: "error",
    theme: "dark",
    title: "Erro!",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    isOpen: false,
  },
};

export const SuccessLight: Story = {
  render: Template,
  args: {
    variant: "success",
    theme: "light",
    title: "Sucesso!",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    isOpen: false,
  },
};

export const SuccessDark: Story = {
  render: Template,
  args: {
    variant: "success",
    theme: "dark",
    title: "Sucesso!",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    isOpen: false,
  },
};



