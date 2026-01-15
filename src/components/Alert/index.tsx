"use client";
import { TriangleAlert, Info, CheckCircle2, X } from "lucide-react";
import { tv, type VariantProps } from "tailwind-variants";

const alert = tv({
  slots: {
    container:
      "",
    content:
      "rounded-lg shadow-lg w-full max-w-lg p-5 relative flex flex-col transition-all border",
    header: "flex items-start gap-3",
    iconWrapper: "flex-shrink-0 mt-1",
    textContent: "flex-1",
    title: "text-lg font-semibold mb-1",
    description: "text-sm mb-1",
    closeButton:
      "absolute top-3 right-3 hover:opacity-80 text-xl cursor-pointer transition-opacity",
  },
  variants: {
    variant: {
      info: {},
      success: {},
      error: {},
    },
    theme: {
      light: {},
      dark: {},
    },
  },
  compoundVariants: [
    // === INFO ===
    {
      variant: "info",
      theme: "light",
      class: {
        content: "bg-blue-50 text-blue-500 border-blue-300",
      },
    },
    {
      variant: "info",
      theme: "dark",
      class: {
        content: "bg-blue-950 text-white border-blue-600",
      },
    },

    // === SUCCESS ===
    {
      variant: "success",
      theme: "light",
      class: {
        content: "bg-green-50 text-green-400 border-green-300",
      },
    },
    {
      variant: "success",
      theme: "dark",
      class: {
        content: "bg-green-700 text-white border-green-600",
      },
    },

    // === ERROR ===
    {
      variant: "error",
      theme: "light",
      class: {
        content: "bg-orange-50 text-orange-500 border-red-300",
      },
    },
    {
      variant: "error",
      theme: "dark",
      class: {
        content: "bg-orange-700 text-white border-red-600",
      },
    },
  ],
  defaultVariants: {
    variant: "error",
    theme: "dark",
  },
});

export interface AlertProps extends VariantProps<typeof alert> {
  isOpen: boolean;
  onClose?: () => void;
  title: string;
  description?: string;
}

export default function Alert({
  isOpen,
  onClose,
  title,
  description,
  variant,
  theme,
}: AlertProps) {
  const {
    container,
    content,
    header,
    iconWrapper,
    textContent,
    title: titleCls,
    description: descriptionCls,
    closeButton,
  } = alert({ variant, theme });

  if (!isOpen) return null;

  const iconMap = {
    info: <Info className="w-6 h-6" />,
    success: <CheckCircle2 className="w-6 h-6" />,
    error: <TriangleAlert className="w-6 h-6" />,
  };

  return (
    <div
      className={container({
        className: isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
      })}
    >
      <div className={content()}>
        {onClose && (
          <button onClick={onClose} className={closeButton()}>
            <X />
          </button>
        )}
        <div className={header()}>
          <div className={iconWrapper()}>{iconMap[variant || "info"]}</div>
          <div className={textContent()}>
            <h2 className={titleCls()}>{title}</h2>
            {description && <p className={descriptionCls()}>{description}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
