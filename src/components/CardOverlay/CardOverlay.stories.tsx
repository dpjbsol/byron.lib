import type { Meta, StoryObj } from "@storybook/react";
import { CardOverlay, type CardOverlayProps } from ".";

const meta: Meta<CardOverlayProps> = {
  title: "Components/CardOverlay",
  component: CardOverlay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamanho do card",
    },
    shadow: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Intensidade da sombra",
    },
    hoverEffect: {
      control: "select",
      options: ["none", "scale", "lift"],
      description: "Efeito de hover",
    },
    overlayVariant: {
      control: "select",
      options: ["blue", "dark", "light"],
      description: "Estilo do overlay",
    },
    overlayContent: {
      control: false,
      description: "Conteúdo exibido dentro do overlay",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    imgSrc: "/montanha.png",
    altText: "Uma montanha nevada",
    title: "Viaje para as montanhas",
    description: "Divirta-se com sua família nesta montanha nevada",
    overlayContent: (
      <button className="bg-white rounded-2xl text-blue-900 font-bold px-3 py-2 cursor-pointer hover:scale-105 duration-300">
        Ver mais
      </button>
    ),
    size: "md",
    shadow: "md",
    hoverEffect: "scale",
    overlayVariant: "blue",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 p-6">
      <div className="space-y-4">
        <h3 className="font-semibold text-center">Blue Overlay</h3>
        <CardOverlay
          imgSrc="/montanha.png"
          altText="Montanha"
          title="Montanha Azul"
          description="Overlay azul padrão"
          overlayVariant="blue"
          hoverEffect="scale"
          overlayContent={<span>Ver mais</span>}
        />
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-center">Dark Overlay</h3>
        <CardOverlay
          imgSrc="/montanha.png"
          altText="Montanha"
          title="Montanha Dark"
          description="Overlay escuro"
          overlayVariant="dark"
          hoverEffect="lift"
          overlayContent={<span>Ver mais</span>}
        />
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-center">Light Overlay</h3>
        <CardOverlay
          imgSrc="/montanha.png"
          altText="Montanha"
          title="Montanha Clara"
          description="Overlay claro"
          overlayVariant="light"
          hoverEffect="scale"
          overlayContent={<span>Ver mais</span>}
        />
      </div>
    </div>
  ),
};
