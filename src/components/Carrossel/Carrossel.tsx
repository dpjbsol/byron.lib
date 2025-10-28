import React, { useEffect, useMemo, useState } from 'react'

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
  // índice do slide atualmente visível
  const [currentIndex, setCurrentIndex] = useState(0)

  // Normaliza fonte de slides:
  // - se items fornecido -> transforma em nodes de imagem
  // - senão children -> aceita qualquer node React
  // - senão fallback com cards numéricos anteriores
  const slides = useMemo(() => {
    if (items && items.length > 0) {
      return items.map((it, idx) => (
        <div
          key={it.id ?? idx}
          className={`flex-none w-full h-[360px] p-6 flex items-center justify-center ${
            theme === 'dark' ? 'bg-[#141414] text-white' : ''
          }`}
        >
          <div className={`w-full h-full rounded-2xl overflow-hidden shadow-md ${theme === 'dark' ? 'bg-[#141414]' : 'bg-white'}`}>
            <img
              src={it.src}
              alt={it.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {it.caption && (
            <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{it.caption}</p>
          )}
        </div>
      ))
    }

    const childrenArr = React.Children.toArray(children)
    if (childrenArr.length > 0) {
      return childrenArr.map((child, idx) => (
        <div
          key={(child as any)?.key ?? idx}
          className={`flex-none w-full h-[360px] p-6 flex items-center justify-center ${
            theme === 'dark' ? 'bg-[#141414] text-white' : ''
          }`}
        >
          {child}
        </div>
      ))
    }

    // fallback original: cards 1..4
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          aria-label="Avançar"
          onClick={handleNext}
          className={`absolute right-[-81px] top-1/2 -translate-y-1/2 rounded-full ${btnBg} w-[51px] h-[51px] flex items-center justify-center shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2`}
          style={{ touchAction: 'manipulation' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <polyline points="9 18 15 12 9 6" />
          </svg>
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
