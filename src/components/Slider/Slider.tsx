import { useState, useMemo } from 'react';
import styles from './Slider.module.css';

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


export const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  defaultValue = 0,
  value,
  disabled = false,
  onChange,
  mode = 'light', 
}: SliderProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  

  const currentValue = value !== undefined ? value : internalValue;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(event.target.value);
    setInternalValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const progressPercent = useMemo(() => {
    return ((currentValue - min) / (max - min)) * 100;
  }, [currentValue, min, max]);

  const containerClasses = [
    styles.sliderContainer,
    mode === 'dark' ? styles.dark : ''
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