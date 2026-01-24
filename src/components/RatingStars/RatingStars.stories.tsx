import type { Meta, StoryObj } from "@storybook/react";
import { RatingStars } from "./index";
import { useState } from "react";

const meta = {
  title: "Components/RatingStars",
  component: RatingStars,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    value: { control: "number", description: "Valor atual da avaliação" },
    max: { control: "number", description: "Quantidade máxima de ícones" },
    icon: {
      control: "select",
      options: ["star", "heart"],
      description: "Tipo de ícone",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tamanho",
    },
    readOnly: { control: "boolean", description: "Somente leitura" },
    allowHalf: { control: "boolean", description: "Permite meias estrelas" },
    activeColor: { control: "color", description: "Cor do ícone ativo" },
    idleColor: { control: "color", description: "Cor do ícone inativo" },
    countText: { control: false }, 
  },
} satisfies Meta<typeof RatingStars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <RatingStars {...args} value={value} onChange={setValue} countText={(v) => `${v}/${args.max}`} />;
  },
  args: {
    value: 3,
    max: 5,
    icon: "star",
    size: "md",

  },
};

export const HalfStars: Story = {
  args: {
    value: 2.5,
    max: 5,
    icon: "star",
    size: "md",
    allowHalf: true,
    countText: (v) => `${v}/5`,

    readOnly:true
  },
};

export const Heart: Story = {
  args: {
    value: 4,
    max: 5,
    icon: "heart",
    size: "md",
    countText: (v) => `${v}/5`,
    readOnly:true
  },
};

export const Small: Story = {
    args: {
        value: 4,
        max: 5,
        size: "sm",
        countText: (v) => `${v}/5`,
        readOnly:true
      },
};
export const Medium: Story = {
    args: {
        value: 2,
        max: 5,
        size: "md",
        countText: (v) => `${v}/5`,
        readOnly:true
      },
};
export const Large: Story = {
    args: {
        value: 2,
        max: 5,
        size: "lg",
        countText: (v) => `${v}/5`,
        readOnly:true
      },
};

export const DifferentColor: Story = {
    args: {
        value: 3,
        max: 5,
        size: "md",
        countText: (v) => `${v}/5`,
        readOnly:true,
        activeColor:"#158023",
        idleColor:"#777474"
      },
};