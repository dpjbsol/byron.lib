// src/components/Slider/Slider.tsx
import { useState, useMemo } from 'react';
import styles from './Slider.module.css';

// ==========================================================
// AQUI ESTÁ A DEFINIÇÃO COMPLETA QUE ESTAVA FALTANDO
// ==========================================================
export interface SliderProps {
  /**
   * O valor inicial (não controlado) do slider.
   */
  defaultValue?: number;
  /**
   * O valor (controlado) do slider.
   */
  value?: number;
  /**
   * O valor mínimo.
   * @default 0
   */
  min?: number;
  /**
   * O valor máximo.
   * @default 100
   */
  max?: number;
  /**
   * O incremento (passo) do slider.
   * @default 1
   */
  step?: number;
  /**
   * Desabilita o slider.
   * @default false
   */
  disabled?: boolean;
  /**
   * Função chamada quando o valor muda.
   */
  onChange?: (value: number) => void;
  /**
   * Define o tema do componente
   * @default 'light'
   */
  mode?: 'light' | 'dark';
}
// ==========================================================
// (FIM DA DEFINIÇÃO)
// ==========================================================

export const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 0,
  value,
  disabled = false,
  onChange,
  mode = 'light', // A nova prop de tema
}: SliderProps) => {
  // Gerencia o estado interno se 'value' não for controlado
  const [internalValue, setInternalValue] = useState(defaultValue);
  
  // Decide se usa o valor externo (controlado) ou interno
  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  // Calcula a porcentagem do progresso
  const progressPercent = useMemo(() => {
    return ((currentValue - min) / (max - min)) * 100;
  }, [currentValue, min, max]);

  // Junta as classes (base + variante de tema)
  const containerClasses = [
    styles.sliderContainer,
    mode === 'dark' ? styles.dark : '' // Adiciona .dark se mode="dark"
  ].join(' ');

  return (
    <div 
      className={containerClasses}
      style={{ '--slider-progress-percent': `${progressPercent}%` } as React.CSSProperties}
    >
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={currentValue}
        disabled={disabled}
        onChange={handleChange}
        className={styles.sliderInput}
        aria-valuenow={currentValue}
      />
    </div>
  );
};