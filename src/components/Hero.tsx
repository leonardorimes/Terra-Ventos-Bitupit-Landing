"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  onContactClick: () => void;
}

// ID do vídeo do Vimeo
const VIMEO_VIDEO_ID = "1142706851";

export default function Hero({ onContactClick }: HeroProps) {
  const { t } = useLanguage();

  useEffect(() => {
    // Carrega o script do Vimeo Player se ainda não estiver carregado
    if (typeof window !== "undefined") {
      const existingScript = document.querySelector('script[src="https://player.vimeo.com/api/player.js"]');
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://player.vimeo.com/api/player.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  // URL do vídeo com parâmetros para autoplay, loop, muted e sem controles
  const vimeoUrl = `https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0`;

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Vídeo de Fundo - Vimeo (atrás de tudo) */}
      <div className="absolute inset-0 w-full h-full vimeo-video-container z-0">
        <iframe
          src={vimeoUrl}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          className="vimeo-video-iframe"
          title="Hero Background Video"
          allowFullScreen
          style={{ zIndex: 0 }}
        />
        {/* Overlay sutil para melhorar legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-[1]" />
      </div>

      {/* Badge Top Right - Membros Ativos */}
      <motion.div
        className="absolute top-8 right-4 md:top-12 md:right-12 z-40"
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl">
          <div className="text-4xl md:text-5xl font-bold text-[#3A3A3A] mb-0.5">
            500+
          </div>
          <div className="text-xs md:text-sm text-[#3A3A3A]/60 font-medium">
            Membros Ativos
          </div>
        </div>
      </motion.div>

      {/* Badge Bottom Left - Volume Investido */}
      <motion.div
        className="absolute bottom-8 left-4 md:bottom-12 md:left-12 z-40"
        initial={{ opacity: 0, scale: 0.9, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="bg-black/75 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl">
          <div className="text-4xl md:text-5xl font-bold text-white mb-0.5">
            R$ 50M+
          </div>
          <div className="text-xs md:text-sm text-white/70 font-medium">
            Volume Investido
          </div>
        </div>
      </motion.div>

      {/* Conteúdo Principal - Posicionado no meio superior */}
      <div className="relative z-30 w-full h-full flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pt-20 md:pt-32">
        <div className="w-full max-w-5xl mx-auto text-center">
          <motion.div
            className="space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Título Principal - Fonte Handwritten/Elegante */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-breathing text-white font-breathing-shadow-dark leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t("hero.bitupita")} Pé na Areia
            </motion.h1>

            {/* Descrição - Texto em múltiplas linhas */}
            <motion.div
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-normal max-w-4xl mx-auto font-breathing-shadow-light space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>Junte-se a uma rede exclusiva de investidores e atletas.</p>
              <p>E tenha acesso antecipado a oportunidades imobiliárias,</p>
              <p>curadoria jurídica e um lifestyle conectado ao vento e ao mar.</p>
            </motion.div>

            {/* CTA Buttons - Lado a Lado */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 md:pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* CTA Principal - Botão Sólido Bege/Claro */}
              <motion.a
                href="https://chat.whatsapp.com/IRDTyn0rKIXLVGQNqPkzQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F5F5F0] text-[#3A3A3A] rounded-xl font-semibold text-base md:text-lg shadow-2xl hover:bg-[#E8E8E0] transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Junte-se à Comunidade</span>
              </motion.a>

              {/* CTA Secundário - Botão Transparente com Borda */}
              <motion.button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white border-2 border-[#F5F5F0] rounded-xl font-semibold text-base md:text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Conheça as Oportunidades</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

