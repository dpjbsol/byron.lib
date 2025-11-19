import React, { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export interface CarouselItem {
  id?: string | number
  src: string
  alt: string
  caption?: string
}

export interface CarouselProps {
  // Tema: 'light' ou 'dark'. Padrão 'light'
  theme?: 'light' | 'dark'
  // items tipados (recomendado para imagens / JSON)
  items?: CarouselItem[]
  // alternativa via composição: qualquer node React
  children?: React.ReactNode | React.ReactNode[]
}

const Carrossel: React.FC<CarouselProps> = ({ theme = 'light', items, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = useMemo(() => {
    if (items && items.length > 0) {
      return items.map((it, idx) => (
        <div
          key={it.id ?? idx}
          className={`flex-none w-full h-[360px] p-4 flex flex-col items-center justify-start ${
            theme === 'dark' ? 'bg-[#141414] text-white' : ''
          }`}
        >
          <div className={`w-full flex-1 rounded-2xl overflow-hidden shadow-md ${theme === 'dark' ? 'bg-[#141414]' : 'bg-white'}`}>
            <img
              src={it.src}
              alt={it.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {it.caption && (
            <p className={`mt-3 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-center w-full`}>{it.caption}</p>
          )}
        </div>
      ))
    }

    const childrenArr = React.Children.toArray(children)
    if (childrenArr.length > 0) {
      return childrenArr.map((child, idx) => (
        <div
          key={(child as any)?.key ?? idx}
          className={`flex-none w-full h-[360px] p-4 flex flex-col items-center justify-start ${
            theme === 'dark' ? 'bg-[#141414] text-white' : ''
          }`}
        >
          <div className="w-full flex-1">
            {child}
          </div>
        </div>
      ))
    }

    return [1, 2, 3, 4].map((n) => (
      <div
        key={n}
        className={`flex-none w-full h-[360px] ${theme === 'light' ? 'bg-[#707070]' : 'bg-[#141414]'} text-white p-6 flex items-center justify-center`}
      >
        <div className="w-full h-full rounded-2xl flex items-center justify-center">
          <span className="text-4xl font-bold select-none">{n}</span>
        </div>
      </div>
    ))
  }, [items, children, theme])

  const total = slides.length

  // Avança para o próximo index com loop infinito
  const handleNext = () => {
    if (total === 0) return
    setCurrentIndex((i: number) => (i + 1) % total)
  }

  // Volta para o anterior com loop infinito
  const handlePrev = () => {
    if (total === 0) return
    setCurrentIndex((i: number) => (i - 1 + total) % total)
  }

  // Ativa navegação por teclado (SetaEsquerda / SetaDireita)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [total])

  const btnBg = theme === 'light' ? 'bg-[#707070]' : 'bg-[#141414]'

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Carrossel de exemplos"
      className="w-full max-w-[340px] mx-auto"
    >
      <div className="relative">
        {/* Viewport do carrossel - fixado em altura, overflow hidden */}
        <div className="overflow-hidden rounded-2xl shadow-md">
          {/* Track: flex com transformação horizontal para trocar slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            aria-live="polite"
          >
            {slides}
          </div>
        </div>

        <button
          aria-label="Voltar"
          onClick={handlePrev}
          className={`absolute left-[-81px] top-1/2 -translate-y-1/2 rounded-full ${btnBg} w-[51px] h-[51px] flex items-center justify-center shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2`}
          style={{ touchAction: 'manipulation' }}
        >
          <ArrowLeft className="text-white" size={20} />
        </button>

        <button
          aria-label="Avançar"
          onClick={handleNext}
          className={`absolute right-[-81px] top-1/2 -translate-y-1/2 rounded-full ${btnBg} w-[51px] h-[51px] flex items-center justify-center shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2`}
          style={{ touchAction: 'manipulation' }}
        >
          <ArrowRight className="text-white" size={20} />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Ir para o slide ${idx + 1}`}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full ${currentIndex === idx ? 'bg-white' : 'bg-white/50'} focus:outline-none`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carrossel
