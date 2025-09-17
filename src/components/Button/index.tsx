import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
  base: "inline-flex items-center justify-center rounded-md font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    variant: {
      default: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700",
      destructive: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
      outline:
        "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 active:bg-gray-100",
      secondary:
        "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300",
      ghost: "text-gray-900 hover:bg-gray-100 active:bg-gray-200",
      link: "text-blue-500 underline-offset-4 hover:underline active:text-blue-600",
    },
    size: {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-12 px-6 text-lg",
      xl: "h-14 px-8 text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  className,
  ...props
}) => {
  return (
    <button className={button({ variant, size, className })} {...props}>
      {children}
    </button>
  );
};
