import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Modal from ".";

const meta = {
  component: Modal,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
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
    isOpen: { control: "boolean" },
    onClose: { control: false },
    onConfirm: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "100vh" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Modal padrão com controle interativo
export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "20px" }}>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Abrir Modal
          </button>
        </div>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => {
            alert("Confirmado!");
            setIsOpen(false);
          }}
        />
      </>
    );
  },
  args: {
    variant: "default",
    title: "Modal Padrão",
    children:
      "Este é o conteúdo do modal padrão. Você pode adicionar qualquer coisa aqui.",
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
  },
};

// Modal Primary
export const Primary: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "20px" }}>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Abrir Modal Primary
          </button>
        </div>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => {
            alert("Confirmado!");
            setIsOpen(false);
          }}
        />
      </>
    );
  },
  args: {
    variant: "primary",
    title: "Modal Primary",
    children: "Este é o conteúdo do modal primário com estilo primary.",
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
  },
};

// Modal Dark
export const Dark: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "20px" }}>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Abrir Modal Dark
          </button>
        </div>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => {
            alert("Confirmado!");
            setIsOpen(false);
          }}
        />
      </>
    );
  },
  args: {
    variant: "dark",
    title: "Modal Dark",
    children: "Este é o conteúdo do modal dark com tema escuro.",
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
  },
};

// Modal Light
export const Light: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "20px" }}>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Abrir Modal Light
          </button>
        </div>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => {
            alert("Confirmado!");
            setIsOpen(false);
          }}
        />
      </>
    );
  },
  args: {
    variant: "light",
    title: "Modal Light",
    children: "Este é o conteúdo do modal light com tema claro.",
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
  },
};

// Modal com tamanhos diferentes
export const SmallSize: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "20px" }}>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Abrir Modal Pequeno
          </button>
        </div>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => {
            alert("Confirmado!");
            setIsOpen(false);
          }}
        />
      </>
    );
  },
  args: {
    variant: "default",
    size: "sm",
    title: "Modal Pequeno",
    children: "Modal com tamanho pequeno.",
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
  },
};

export const LargeSize: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <div style={{ padding: "20px" }}>
          <button
            onClick={() => setIsOpen(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Abrir Modal Grande
          </button>
        </div>
        <Modal
          {...args}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => {
            alert("Confirmado!");
            setIsOpen(false);
          }}
        />
      </>
    );
  },
  args: {
    variant: "default",
    size: "lg",
    title: "Modal Grande",
    children: "Modal com tamanho grande, ideal para mais conteúdo.",
    isOpen: false,
    onClose: () => {},
    onConfirm: () => {},
  },
};
