"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  alt: string;
  className?: string;
  maxImages?: number;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function ImageSlider({
  images,
  alt,
  className = "",
  maxImages = 4,
  autoPlay = false,
  autoPlayInterval = 5000,
}: ImageSliderProps) {
  // Limitar ao máximo de imagens
  const limitedImages = images.slice(0, maxImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play
  useEffect(() => {
    if (autoPlay && limitedImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % limitedImages.length);
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, limitedImages.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % limitedImages.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + limitedImages.length) % limitedImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (limitedImages.length === 0) {
    return null;
  }

  // Se houver apenas uma imagem, não mostrar slider
  if (limitedImages.length === 1) {
    return (
      <div className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-accent-200/50 ${className}`}>
        <Image
          src={limitedImages[0]}
          alt={alt}
          fill
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-accent-200/50 group ${className}`}>
      {/* Container das imagens */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={limitedImages[currentIndex]}
              alt={`${alt} - ${currentIndex + 1}`}
              fill
              className="object-cover"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>

      {/* Botões de navegação */}
      {limitedImages.length > 1 && (
        <>
          {/* Botão anterior */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Imagem anterior"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-accent-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Botão próximo */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Próxima imagem"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-accent-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Indicadores de slide */}
      {limitedImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {limitedImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Contador de imagens */}
      {limitedImages.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium z-10">
          {currentIndex + 1} / {limitedImages.length}
        </div>
      )}
    </div>
  );
}

