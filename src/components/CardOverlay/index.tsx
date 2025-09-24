import { tv, type VariantProps } from "tailwind-variants";
import type { ReactNode } from "react";

const card = tv({
  slots: {
    base: "relative rounded-xl overflow-hidden group transition-transform duration-300",
    image: "w-full object-cover",
    content: "p-2",
    overlay:
      "absolute inset-0 rounded-xl flex items-center justify-center text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  },
  variants: {
    size: {
      sm: { base: "max-w-[200px] p-2" },
      md: { base: "max-w-[300px] p-3" },
      lg: { base: "max-w-[400px] p-4" },
    },
    shadow: {
      none: { base: "shadow-none" },
      sm: { base: "shadow-sm" },
      md: { base: "shadow-md" },
      lg: { base: "shadow-lg" },
      xl: { base: "shadow-xl" },
    },
    hoverEffect: {
      none: { base: "" },
      scale: { base: "hover:scale-[1.02]" },
      lift: { base: "hover:-translate-y-1" },
    },
    overlayVariant: {
      blue: { overlay: "bg-gradient-to-t from-blue-400 via-blue-300 to-blue-200 text-white" },
      dark: { overlay: "bg-gradient-to-t from-black via-gray-900 to-gray-700 text-white" },
      light: { overlay: "bg-gradient-to-t from-white via-gray-200 to-gray-100 text-black" },
    },
  },
  defaultVariants: {
    size: "md",
    shadow: "md",
    hoverEffect: "scale",
    overlayVariant: "blue",
  },
});

export interface CardOverlayProps extends VariantProps<typeof card> {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  overlayContent?: ReactNode;
}

export function CardOverlay({
  imgSrc,
  altText,
  title,
  description,
  overlayContent,
  size,
  shadow,
  hoverEffect,
  overlayVariant,
}: CardOverlayProps) {
  const { base, image, content, overlay } = card({ size, shadow, hoverEffect, overlayVariant });

  return (
    <div className={base()}>
      <img  src={imgSrc} alt={altText} className={image()} />

      <div className={content()}>
        <h1 className="text-lg font-bold">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>

      {overlayContent && <div className={overlay()}>{overlayContent}</div>}
    </div>
  );
}
