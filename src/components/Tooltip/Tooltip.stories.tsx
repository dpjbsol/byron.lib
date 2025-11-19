import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, type TooltipProps } from ".";
import { Info } from "lucide-react";

const meta: Meta<TooltipProps> = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description:
        "Conteúdo que será exibido dentro do tooltip. Pode ser texto ou JSX",
    },
    color: {
      control: "select",
      options: ["dark", "light"],
      description: "Tema de cor do tooltip. Light ou Dark mode",
    },
    position: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "Posição do tooltip",
    },
    children: {
      control: "text",
      description: "Elemento que ativa o tooltip ao passar o mouse; JSX",
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="p-4">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: "Teste",
    position: "top",
    children: (
      <button className="bg-white rounded-md text-black font-semibold py-2 px-4 border border-gray-300 hover:bg-gray-300 transition-colors duration-200">
        Exemplo
      </button>
    ),
    color: "dark",
  },
};

export const InfoButton: Story = {
  argTypes: {
    color: {
      control: "select",
      options: ["dark", "light"],
    },
    position: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
  },
  args: {
    content: (
      <div>
        <h2 className="font-bold">Título</h2>
        <p className="text-xs mt-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
          velit. Iusto asperiores ex repellendus laudantium ea nostrum, earum,
          ipsum corrupti nobis minus
        </p>
      </div>
    ),
    position: "top",
    children: (
      <button className="bg-white rounded-4xl hover:bg-gray-300 transition-colors">
        <Info />
      </button>
    ),
  },
  decorators: [
    (Story) => {
      return (
        <div className="p-12">
          <Story />
        </div>
      );
    },
  ],
};
