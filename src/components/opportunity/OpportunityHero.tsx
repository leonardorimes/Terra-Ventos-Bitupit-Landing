"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import LoadingScreen from "../LoadingScreen";
import ResizeLoading from "../ResizeLoading";
import { useResizeLoading } from "../../hooks/useResizeLoading";
import { useLanguage } from "@/contexts/LanguageContext";

interface OpportunityHeroProps {
  onContactClick: () => void;
}

export default function OpportunityHero({ onContactClick }: OpportunityHeroProps) {
  const { t } = useLanguage();

  // Estados para controle de vídeos
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoKey, setVideoKey] = useState(0);
  const [isBlackScreen, setIsBlackScreen] = useState(false);

  const isResizeLoading = useResizeLoading({
    threshold: 25,
    duration: 3000,
  });

  // ID do vídeo fixo do YouTube que será exibido como fundo
  const videoId = "0oS_uOBhVYw"; // Vídeo fixo do YouTube

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    console.log("🎬 Carregando vídeo do YouTube:", videoId);
    setCurrentVideo(videoId);
    setIsVideoLoading(true);
    setIsVideoPlaying(false);
    setVideoError(false);
  }, []);

  const handleVideoLoadStart = () => {
    console.log("🔄 Carregamento do iframe iniciado");
    setIsVideoLoading(true);
    setVideoError(false);
    setTimeout(() => {
      setIsVideoLoading(false);
      setIsVideoPlaying(true);
    }, 2000);
  };

  const handleVideoError = (
    e: React.SyntheticEvent<HTMLIFrameElement, Event>
  ) => {
    console.error("❌ Erro ao carregar vídeo do YouTube:", e);
    setIsVideoLoading(false);
    setIsVideoPlaying(false);
    setVideoError(true);
  };

  const reloadVideo = () => {
    console.log("🔄 Recarregando vídeo para evitar tela preta...");
    setVideoKey((prev) => prev + 1);
    setIsVideoLoading(true);
    setIsVideoPlaying(false);
    setVideoError(false);
    setIsBlackScreen(false);

    setTimeout(() => {
      setIsVideoLoading(false);
      setIsVideoPlaying(true);
    }, 2000);
  };

  const handleBlackScreen = () => {
    console.log("⚫ Tela preta detectada, recarregando vídeo...");
    setIsBlackScreen(true);
    setTimeout(() => {
      reloadVideo();
    }, 3000);
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      <ResizeLoading isVisible={isResizeLoading} />

      <section className="relative min-h-screen flex items-center w-full max-w-full overflow-hidden">
        {/* Container do vídeo de fundo */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-black"></div>

          {currentVideo && (
            <div className="absolute inset-0 w-full h-full z-5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 z-10 pointer-events-none"></div>
              <iframe
                key={videoKey}
                className="absolute top-1/2 left-1/2 
                  w-[177.78vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2
                  md:w-[177.78vh] md:h-[56.25vw]
                  sm:w-[200vh] sm:h-[112.5vw] sm:scale-110
                  w-[250vh] h-[140.625vw] scale-125"
                src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1&mute=1&loop=1&playlist=${currentVideo}&controls=0&showinfo=0&rel=0&modestbranding=1&fs=0&disablekb=1&enablejsapi=1&start=0`}
                title="Background Video"
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen={false}
                onLoad={handleVideoLoadStart}
                onError={handleVideoError}
                loading="eager"
              />
            </div>
          )}

          {isVideoPlaying && (
            <div
              className="absolute inset-0 z-10 cursor-pointer"
              onClick={handleBlackScreen}
              title="Clique para recarregar o vídeo se estiver com tela preta"
            />
          )}

          {isBlackScreen && (
            <div className="absolute top-4 right-4 z-20 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              ⚫ Recarregando vídeo...
            </div>
          )}

          {isVideoPlaying && !isBlackScreen && (
            <button
              onClick={reloadVideo}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-200"
              title="Recarregar vídeo"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          )}

          {isVideoLoading && (
            <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20">
              <div className="text-center text-white">
                <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-xl font-semibold mb-2">
                  {t("hero.loading")}
                </p>
                <p className="text-sm text-white/80">
                  {t("hero.loading.subtitle")}
                </p>
              </div>
            </div>
          )}

          {videoError && (
            <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-20">
              <div className="text-center text-white max-w-md mx-auto px-4">
                <div className="text-6xl mb-4">⚠️</div>
                <p className="text-xl font-semibold mb-2">
                  {t("hero.video.error")}
                </p>
                <p className="text-sm text-white/80 mb-2">
                  {t("hero.video.error.subtitle")}
                </p>
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => window.location.reload()}
                    className="bg-accent-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-accent-600 transition-colors text-sm"
                  >
                    🔄 Recarregar página
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-black/5 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/2 via-transparent to-black/8 z-15"></div>

        {/* Container principal do conteúdo */}
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-center py-8 md:py-0">
          <div className="text-center max-w-5xl mx-auto w-full">
            <motion.div
              className="text-white space-y-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-breathing mb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="space-y-6 sm:space-y-8 md:space-y-12">
                  <div className="text-white font-breathing w-full">
                    Bitupitá: Pé na Areia
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-breathing">
                    4,300m²
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-breathing">
                    Seu Refúgio Particular
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-accent-400 font-breathing">
                    Seu Melhor Investimento
                  </div>
                </div>
              </motion.h1>

              <motion.p
                className="text-white font-medium leading-relaxed mb-12 mt-12 sm:mb-16 sm:mt-16 md:mb-16 md:mt-24 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1,
                  duration: 1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="space-y-2 text-center">
                  <div className="text-lg sm:text-xl md:text-2xl font-semibold">
                    Atendemos quando o período do desvio termina e passam aos 8ges antes do itima serladeira.
                  </div>
                </div>
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center mt-16 sm:mt-20 md:mt-32 w-full"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.6,
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <motion.button
                  onClick={onContactClick}
                  className="bg-accent-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-avenir w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Quero Saber Mais
                </motion.button>
                <motion.a
                  href="#analisando-oportunidade"
                  className="border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm font-avenir w-full sm:w-auto text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Analisar Oportunidade
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Estatísticas flutuantes */}
        <motion.div
          className="hidden lg:block absolute top-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-accent-500">4,300m²</div>
            <div className="text-sm text-white/80">Área Total</div>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:block absolute bottom-8 left-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/20"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-center text-white">
            <div className="text-3xl font-bold text-accent-500">2021</div>
            <div className="text-sm text-white/80">Data de Lançamento</div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

