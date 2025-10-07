"use client";

import { useEffect } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const modal = tv({
  slots: {
    backdrop:
      "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300",
    container:
      "fixed inset-0 flex items-center justify-center z-50 transition-all duration-300",
    content:
      "bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative transition-all",
    title: "text-lg font-semibold mb-3",
    body: "mb-4",
    buttons: "flex mt-4 gap-3 justify-end",
    closeButton:
      "absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold cursor-pointer",
    cancelButton:
      "px-4 py-2 rounded-md transition font-medium border border-transparent",
    confirmButton:
      "px-4 py-2 rounded-md transition font-medium border border-transparent",
  },

  variants: {
    variant: {
      default: {
        content: "bg-white text-black",
        cancelButton: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        confirmButton: "bg-blue-600 text-white hover:bg-blue-700",
      },
      primary: {
        content: "bg-blue-100 text-blue-900",
        cancelButton: "bg-blue-300 text-blue-900 hover:bg-blue-400",
        confirmButton: "bg-blue-700 text-white hover:bg-blue-800",
      },
      dark: {
        content: "bg-zinc-800 text-gray-100",
        cancelButton: "bg-zinc-700 text-white hover:bg-gray-700",
        confirmButton: "bg-zinc-900 text-white hover:bg-blue-500",
      },
      light: {
        content: "bg-gray-50 text-gray-800",
        cancelButton: "bg-gray-200 text-gray-700 hover:bg-gray-300",
        confirmButton: "bg-indigo-500 text-white hover:bg-indigo-600",
      },
    },
    size: {
      sm: { content: "max-w-sm" },
      md: { content: "max-w-md" },
      lg: { content: "max-w-lg" },
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface ModalProps extends VariantProps<typeof modal> {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({
  isOpen,
  onClose,
  onConfirm,
  children,
  title,
  variant,
  size,
}: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const {
    backdrop,
    container,
    content,
    title: titleCls,
    body,
    buttons,
    closeButton,
    cancelButton,
    confirmButton,
  } = modal({ variant, size });

  return (
    <>
      <div
        className={backdrop({
          className: isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        })}
      />
      <div
        className={container({
          className: isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none",
        })}
      >
        <div className={content()}>
          <button onClick={onClose} className={closeButton()}>
            ×
          </button>

          {title && <h2 className={titleCls()}>{title}</h2>}

          <div className={body()}>{children}</div>

          <div className={buttons()}>
            <button onClick={onClose} className={cancelButton()}>
              Cancelar
            </button>
            <button onClick={onConfirm} className={confirmButton()}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}