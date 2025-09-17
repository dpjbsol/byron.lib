import type { Meta, StoryObj } from "@storybook/react";
import { Button, type ButtonProps } from ".";

const meta: Meta<ButtonProps> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The content of the button",
    },
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "The visual style variant of the button",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "The size of the button",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
    size: "md",
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
    size: "md",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
    size: "md",
  },
};

export const Link: Story = {
  args: {
    children: "Link Button",
    variant: "link",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    variant: "default",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    variant: "default",
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    children: "Extra Large",
    variant: "default",
    size: "xl",
  },
};

export const AllVariants: Story = {
  args: {
    children: "All Variants",
  },
  render: () => (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="space-y-2 space-x-2">
        <h3 className="font-semibold">Default</h3>
        <Button variant="default" size="sm">
          Small
        </Button>
        <Button variant="default" size="md">
          Medium
        </Button>
        <Button variant="default" size="lg">
          Large
        </Button>
        <Button variant="default" size="xl">
          XL
        </Button>
      </div>

      <div className="space-y-2 space-x-2">
        <h3 className="font-semibold">Destructive</h3>
        <Button variant="destructive" size="sm">
          Delete
        </Button>
        <Button variant="destructive" size="md">
          Delete
        </Button>
        <Button variant="destructive" size="lg">
          Delete
        </Button>
        <Button variant="destructive" size="xl">
          Delete
        </Button>
      </div>

      <div className="space-y-2 space-x-2">
        <h3 className="font-semibold">Outline</h3>
        <Button variant="outline" size="sm">
          Outline
        </Button>
        <Button variant="outline" size="md">
          Outline
        </Button>
        <Button variant="outline" size="lg">
          Outline
        </Button>
        <Button variant="outline" size="xl">
          Outline
        </Button>
      </div>

      <div className="space-y-2 space-x-2">
        <h3 className="font-semibold">Secondary</h3>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
        <Button variant="secondary" size="md">
          Secondary
        </Button>
        <Button variant="secondary" size="lg">
          Secondary
        </Button>
        <Button variant="secondary" size="xl">
          Secondary
        </Button>
      </div>

      <div className="space-y-2 space-x-2">
        <h3 className="font-semibold">Ghost</h3>
        <Button variant="ghost" size="sm">
          Ghost
        </Button>
        <Button variant="ghost" size="md">
          Ghost
        </Button>
        <Button variant="ghost" size="lg">
          Ghost
        </Button>
        <Button variant="ghost" size="xl">
          Ghost
        </Button>
      </div>

      <div className="space-y-2 space-x-2">
        <h3 className="font-semibold">Link</h3>
        <Button variant="link" size="sm">
          Link
        </Button>
        <Button variant="link" size="md">
          Link
        </Button>
        <Button variant="link" size="lg">
          Link
        </Button>
        <Button variant="link" size="xl">
          Link
        </Button>
      </div>
    </div>
  ),
};
