import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, type DropdownProps } from ".";

const meta: Meta<DropdownProps> = {
  title: "Example/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Texto exibido no botão principal do dropdown",
    },
    items: {
      control: "object",
      description: "Lista de itens com nome e ação ao clicar",
    },
    position: {
      control: "select",
      options: ["left", "right"],
      description: "Posição do menu em relação ao botão",
    },
    alignment: {
      control: "select",
      options: ["left", "right"],
      description: "Alinhamento do conteúdo dos itens dentro do menu",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const exampleItems = [
  { name: "Opção 1", action: () => console.log("Opção 1 clicada") },
  { name: "Opção 2", action: () => console.log("Opção 2 clicada") },
  { name: "Opção 3", action: () => console.log("Opção 3 clicada") },
];

export const Default: Story = {
  args: {
    label: "Menu",
    items: exampleItems,
    position: "right",
    alignment: "right",
  },
};

export const LeftVariant: Story = {
  args: {
    label: "Menu",
    items: exampleItems,
    position: "left",
    alignment: "left",
  },
};
