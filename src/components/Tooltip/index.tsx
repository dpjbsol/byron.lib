import { useState } from "react";
import type { ReactNode } from "react";

import { tv, type VariantProps } from "tailwind-variants";

const tooltip = tv({
  base: "absolute z-20 px-2 py-1 rounded-md bg-neutral-800 text-sm text-white transition-opacity duration-200 break-words break-lines w-max max-w-xs sm:max-w-sm md:max-w-md",
  variants: {
    color: {
      light: "bg-white text-neutral-900 border border-neutral-300",
      dark: "bg-neutral-800 text-white ",
    },
  },
});

export interface TooltipProps extends VariantProps<typeof tooltip> {
  content: ReactNode;
  children: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
}

export function Tooltip({
  content,
  children,
  position = "top",
  color,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
  }[position];

  const arrowClasses = {
    top: "absolute left-1/2 top-full -translate-x-1/2 -translate-y-[4px]",
    right: "absolute right-full top-1/2 -translate-y-1/2 translate-x-[4px]",
    bottom: "absolute left-1/2 bottom-full -translate-x-1/2 translate-y-[4px]",
    left: "absolute left-full top-1/2 -translate-y-1/2 -translate-x-[4px]",
  }[position];

  const lightBorderHide = {
    top: "border-t-0 border-l-0",
    right: "border-r-0 border-t-0",
    bottom: "border-b-0 border-r-0",
    left: "border-l-0 border-b-0",
  }[position];

  const arrowColor =
    color === "light"
      ? "bg-white border border-neutral-300 shadow-none"
      : "bg-neutral-800";

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div className={`${tooltip({ color})} ${positionClasses}`}>
          {content}
          <div
            className={`${arrowClasses} w-2 h-2 rotate-45 z-30 ${arrowColor} ${
              color === "light" ? lightBorderHide : ""
            }`}
          />
        </div>
      )}
    </div>
  );
}
