import * as React from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

type IconsPreset = "chevron" | "plusminus";

export type AccordionItem = {
  title: React.ReactNode;
  body: React.ReactNode;
  icon?: React.ReactNode;
  actionOpenIcon?: React.ReactNode;
  actionClosedIcon?: React.ReactNode;
  id?: string;
};

export type AccordionProps = {
  data: AccordionItem[];
  variant?: "default" | "pill";
  minimal?: boolean;
  exclusive?: boolean;
  defaultOpen?: boolean;
  highlightColor?: string;
  iconsPreset?: IconsPreset;
  className?: string;
  style?: React.CSSProperties;
};

type CSSVarStyle = React.CSSProperties & { [key: `--${string}`]: string };

function resolveHighlightRGB(token?: string): string {
  const map: Record<string, string> = {
    "indigo-500": "99 102 241",
    "blue-500": "59 130 246",
    "sky-500": "14 165 233",
    "cyan-500": "6 182 212",
    "teal-500": "20 184 166",
    "emerald-500": "16 185 129",
    "green-500": "34 197 94",
    "lime-500": "132 204 22",
    "yellow-500": "234 179 8",
    "amber-500": "245 158 11",
    "orange-500": "249 115 22",
    "red-500": "239 68 68",
    "rose-500": "244 63 94",
    "pink-500": "236 72 153",
    "purple-500": "168 85 247",
    "violet-500": "139 92 246",
    "zinc-500": "113 113 122",
    "neutral-500": "115 115 115",
    "gray-500": "107 114 128",
    "slate-500": "100 116 139",
  };
  if (!token) return map["indigo-500"];
  return map[token] ?? map["indigo-500"];
}

function clsx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

function getActionIcon(item: AccordionItem, isOpen: boolean, preset: IconsPreset): React.ReactElement {
  if (item.actionOpenIcon && item.actionClosedIcon) {
    return isOpen ? <>{item.actionOpenIcon}</> : <>{item.actionClosedIcon}</>;
  }
  
  if (preset === "plusminus") {
    return isOpen ? <Minus size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />;
  }
  
  return (
    <ChevronDown
      size={16}
      className={clsx("transition-transform", isOpen ? "rotate-180" : "rotate-0")}
      aria-hidden="true"
    />
  );
}

export function Accordion({
  data,
  variant = "default",
  minimal = false,
  exclusive = true,
  defaultOpen = false,
  highlightColor = "indigo-500",
  iconsPreset = "chevron",
  className,
  style,
}: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(exclusive && defaultOpen ? 0 : null);
  const [openIndexes, setOpenIndexes] = React.useState<number[]>(!exclusive && defaultOpen ? [0] : []);

  const hl = resolveHighlightRGB(highlightColor);
  const rootStyle: CSSVarStyle = { ...(style ?? {}), ["--accordion-hl"]: hl };

  return (
    <div className={clsx("w-full", className)} style={rootStyle}>
      <ul className="m-0 list-none p-0">
        {data.map((item, i) => {
          const id = item.id ?? `acc-item-${i}`;
          const isOpen = exclusive ? openIndex === i : openIndexes.includes(i);

          const toggle = () => {
            if (exclusive) {
              setOpenIndex(isOpen ? null : i);
            } else {
              setOpenIndexes((curr) => (isOpen ? curr.filter((n) => n !== i) : [...curr, i].sort((a, b) => a - b)));
            }
          };

          const action = getActionIcon(item, isOpen, iconsPreset);

          if (variant === "pill") {
            return (
              <li key={id} className="relative mb-3 last:mb-0">
                <div
                  className={clsx(
                    "rounded-2xl transition-colors shadow-sm",
                    isOpen
                      ? "ring-1 ring-[rgb(var(--accordion-hl)/0.2)] bg-[rgb(var(--accordion-hl)/0.08)] shadow"
                      : "bg-zinc-100 dark:bg-zinc-800"
                  )}
                >
                  <Header
                    minimal={minimal}
                    isOpen={isOpen}
                    onToggle={toggle}
                    leftIcon={item.icon}
                    action={action}
                    variant="pill"
                  >
                    {item.title}
                  </Header>
                  <Content isOpen={isOpen} variant="pill">
                    {item.body}
                  </Content>
                </div>
              </li>
            );
          }

          return (
            <li
              key={id}
              className={clsx(
                "group relative rounded-xl border border-zinc-200/70 bg-white dark:border-zinc-800/70 dark:bg-zinc-900",
                "mb-1 last:mb-0"
              )}
            >
              <Header
                minimal={minimal}
                isOpen={isOpen}
                onToggle={toggle}
                leftIcon={item.icon}
                action={action}
                variant="default"
              >
                {item.title}
              </Header>
              <Content isOpen={isOpen} variant="default">
                {item.body}
              </Content>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

type HeaderProps = {
  minimal: boolean;
  isOpen: boolean;
  onToggle: () => void;
  leftIcon?: React.ReactNode;
  action: React.ReactElement;
  variant: "default" | "pill";
  children: React.ReactNode;
};

function Header({ minimal, isOpen, onToggle, leftIcon, action, variant, children }: HeaderProps) {
  const baseClasses = "flex w-full items-center text-left focus:outline-none transition-colors";
  const spacingClasses = minimal ? "gap-2 px-4 py-2.5" : "gap-3 px-4 py-3";
  const focusClasses = "focus-visible:ring-2 focus-visible:ring-[rgb(var(--accordion-hl))] focus-visible:ring-offset-1";
  const roundingClasses = variant === "default" 
    ? "rounded-xl" 
    : (isOpen ? "rounded-t-2xl" : "rounded-2xl");

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className={clsx(baseClasses, spacingClasses, focusClasses, roundingClasses)}
    >
      {leftIcon && <span className="text-zinc-500 dark:text-zinc-400 flex-shrink-0">{leftIcon}</span>}
      <span className="flex-1 text-sm font-medium text-zinc-900 dark:text-zinc-100">{children}</span>
      {!minimal && (
        <span
          className={clsx(
            "inline-flex h-7 w-7 items-center justify-center rounded-full flex-shrink-0",
            isOpen
              ? "text-zinc-700 dark:text-zinc-200"
              : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
          )}
        >
          {action}
        </span>
      )}
    </button>
  );
}

type ContentProps = {
  isOpen: boolean;
  variant: "default" | "pill";
  children: React.ReactNode;
};

function Content({ isOpen, variant, children }: ContentProps) {
  if (!isOpen) return null;
  return (
    <div
      className={clsx(
        "px-4 pb-4 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed",
        variant === "pill" && "rounded-b-2xl",
        variant === "default" && ""
      )}
    >
      {children}
    </div>
  );
}

export default Accordion;