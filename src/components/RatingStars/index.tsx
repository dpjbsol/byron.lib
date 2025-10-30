import { useState } from "react";
export interface RatingStarsProps {
    value: number;
    onChange?: (v: number) => void;
    max?: number;
    readOnly?: boolean;
    allowHalf?: boolean;
    countText?: (v: number) => string;
    icon?: "star" | "heart";
    activeColor?: string;
    idleColor?: string;
    size?: "sm" | "md" | "lg";
  }
  
  export function RatingStars({
    value,
    onChange,
    max = 5,
    readOnly = false,
    allowHalf = false,
    countText,
    activeColor,
    idleColor,
    icon = "star",
    size = "md",
  }: RatingStarsProps) {
    const [hoverValue, setHoverValue] = useState<number | null>(null);
  
    const stars: number[] = [];
    for (let i = 1; i <= max; i++) stars.push(i);
  
    const handleClick = (newValue: number) => {
      if (!readOnly && onChange) onChange(newValue);
    };
    const handleMouseEnter = (index: number) => { if (!readOnly) setHoverValue(index); };
    const handleMouseLeave = () => { if (!readOnly) setHoverValue(null); };
  
    const icons = {
        star: (
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
        ),
        heart: (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        ),
      };
      
  
    const active = activeColor ?? (icon === "heart" ? "#ef4444" : "#facc15");
    const idle = idleColor ?? "#d1d5db";
  
    const sizeMap: Record<string, string> = {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
    };
    const sizeClass = sizeMap[size];
  
    const renderIcon = (index: number) => {
      const currentValue = hoverValue !== null ? hoverValue : value;
      const full = currentValue >= index;
      const half = allowHalf && currentValue + 0.5 >= index && currentValue < index;
  
      return (
        <div
          key={index}
          role="radio"
          aria-checked={value >= index}
          aria-label={`${index}${allowHalf ? " ou meia" : ""} de ${max} estrelas`}
          tabIndex={-1}
          className={`relative inline-block transition-transform duration-150 ${readOnly ? "" : "cursor-pointer hover:scale-110"}`}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <svg
            className={sizeClass}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill={idle}
            viewBox={icon === "heart" ? "0 0 24 24" : "0 0 22 20"}
          >
            {icons[icon]}
          </svg>
  
          {(full || half) && (
            <svg
              className={`absolute top-0 left-0 ${sizeClass}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill={active}
              viewBox={icon === "heart" ? "0 0 24 24" : "0 0 22 20"}
              style={half ? { clipPath: "inset(0 50% 0 0)" } : {}}
            >
              {icons[icon]}
            </svg>
          )}
        </div>
      );
    };
  
    return (
      <div className="flex items-center">
        <div
          className="flex items-center"
          role="radiogroup"
          tabIndex={0}
          onKeyDown={(e) => {
            if (readOnly) return;
            if (e.key === "ArrowRight") handleClick(Math.min(value + (allowHalf ? 0.5 : 1), max));
            if (e.key === "ArrowLeft") handleClick(Math.max(value - (allowHalf ? 0.5 : 1), 0));
            if (e.key === " " || e.key === "Enter") handleClick(value);
          }}
        >
          {stars.map((i) => renderIcon(i))}
          {!readOnly && (
            <span className="sr-only" aria-live="polite">
              {value} de {max} estrelas selecionadas
            </span>
          )}
        </div>
        {countText && <span className="ml-2 text-sm text-gray-600">{countText(value)}</span>}
      </div>
    );
  }
  