import React, { useEffect, useMemo, useState } from 'react'

export interface CarouselProps {
  // Tema: 'light' ou 'dark'. Padrão 'light'
  theme?: 'light' | 'dark'
}

const Carrossel: React.FC<CarouselProps> = ({ theme = 'light' }) => {
  // índice do slide atualmente visível
  const [currentIndex, setCurrentIndex] = useState(0)

  // Items de exemplo: 4 cards com números
  const items = useMemo(() => [1, 2, 3, 4], [])
  const total = items.length

  // Avança para o próximo index com loop infinito
  const handleNext = () => setCurrentIndex((i: number) => (i + 1) % total)

  // Volta para o anterior com loop infinito
  const handlePrev = () => setCurrentIndex((i: number) => (i - 1 + total) % total)

  // Ativa navegação por teclado (SetaEsquerda / SetaDireita)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [total])

  const bgCard = theme === 'light' ? 'bg-[#707070]' : 'bg-[#141414]'
  const btnBg = theme === 'light' ? 'bg-[#707070]' : 'bg-[#141414]'
  const textColor = theme === 'light' ? 'text-white' : 'text-white'

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
          >
            {items.map((n: number) => (
              <div
                key={n}
                className={`flex-none w-full h-[360px] ${bgCard} ${textColor} p-6 flex items-center justify-center`}
              >
                {/* Card interno com bordas arredondadas (dimensão principal 340x360) */}
                <div className="w-full h-full rounded-2xl flex items-center justify-center">
                  <span className="text-4xl font-bold select-none">{n}</span>
                </div>
              </div>
            ))}
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
        {items.map((_, idx) => (
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
