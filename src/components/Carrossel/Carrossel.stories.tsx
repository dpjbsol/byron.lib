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
    items: {
      control: "object",
      description: "Array de itens com imagens para exibir no carrossel",
    },
    children: {
      control: false,
      description: "Conteúdo personalizado via composição (alternativa a items)",
    },
  },
} satisfies Meta<typeof Carrossel>;

export default meta;
type Story = StoryObj<typeof meta>;

// Carrossel padrão (fallback com cards numéricos)
export const Default: Story = {
  args: {
    theme: "light",
  },
};

// Carrossel Light
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

// Carrossel com imagens (via items)
export const WithImages: Story = {
  args: {
    theme: "light",
    items: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=360&fit=crop",
        alt: "Montanha ao pôr do sol",
        caption: "Paisagem montanhosa",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=360&fit=crop",
        alt: "Floresta verde",
        caption: "Natureza exuberante",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=360&fit=crop",
        alt: "Estrada vazia",
        caption: "Caminho livre",
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=360&fit=crop",
        alt: "Lago tranquilo",
        caption: "Reflexos na água",
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Carrossel exibindo imagens através da propriedade `items`. Cada item pode ter `src`, `alt`, `caption` e `id` opcional.",
      },
    },
  },
};

// Carrossel com imagens (tema dark)
export const WithImagesDark: Story = {
  args: {
    theme: "dark",
    items: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=360&fit=crop",
        alt: "Montanha ao pôr do sol",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=360&fit=crop",
        alt: "Floresta verde",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=360&fit=crop",
        alt: "Estrada vazia",
      },
    ],
  },
};

// Carrossel com conteúdo customizado (via children)
export const WithCustomContent: Story = {
  render: (args) => (
    <Carrossel {...args}>
      <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
        Slide Customizado 1
      </div>
      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
        Slide Customizado 2
      </div>
      <div className="w-full h-full bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
        Slide Customizado 3
      </div>
    </Carrossel>
  ),
  args: {
    theme: "light",
  },
  parameters: {
    docs: {
      description: {
        story: "Carrossel com conteúdo totalmente customizado através de `children`. Permite usar qualquer componente React como slide.",
      },
    },
  },
};

// Story interativa
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