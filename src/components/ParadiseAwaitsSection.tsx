"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ParadiseAwaitsSection() {
  const { setLanguage, language, t } = useLanguage();
  
  const handleLanguageChange = (lang: "pt" | "en" | "es") => {
    setLanguage(lang);
    // Scroll suave para o topo para ver as mudanças
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <AnimatedSection
      background="none"
      color="gray"
      direction="up"
      delay={0.1}
      className="pt-8 pb-20 md:pt-12 lg:pt-16 bg-[#F9F6F0] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo - Conteúdo */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 mb-8 lg:mb-12 font-breathing">
              {t("paradise.title")}
            </h2>

            {/* Seção WhatsApp */}
            <motion.a
              href="https://chat.whatsapp.com/IRDTyn0rKIXLVGQNqPkzQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-accent-200/50 mb-8 block cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start gap-4">
                {/* Ícone WhatsApp */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-500 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-green-600 transition-colors duration-300">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 border-l-2 border-accent-200 pl-4">
                  <p className="text-base md:text-lg lg:text-xl text-secondary-700 leading-relaxed font-body font-semibold group-hover:text-accent-600 transition-colors duration-300">
                    {t("paradise.cta")}
                  </p>
                </div>
              </div>
            </motion.a>

            {/* Informações de Contato */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <p className="text-base md:text-lg text-secondary-600 leading-relaxed font-body mb-2">
                {t("paradise.contact")}
                <a
                  href="mailto:contato@terraventos.com"
                  className="underline text-accent-600 hover:text-accent-700 font-semibold"
                >
                  Envie um email
                </a>
              </p>
              <p className="text-base md:text-lg text-secondary-600 leading-relaxed font-body">
                Oferecimento:{" "}
                <span className="underline font-semibold text-primary-600">Terra Ventos</span>
              </p>
            </motion.div>

            {/* Foto do CEO */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-accent-200/50 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative w-48 h-48 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                  <Image
                    src="/images/bernardo.png"
                    alt="Bernardo Carvalho Wertheim"
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl font-bold text-primary-500 font-diodrum">
                    Bernardo Carvalho Wertheim
                  </p>
                  <p className="text-base md:text-lg text-secondary-600 font-body">
                    {t("paradise.ceo")}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Opções de Idioma */}
            <motion.div
              className="flex flex-wrap gap-4 text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <button
                onClick={() => handleLanguageChange("pt")}
                className={`flex items-center gap-2 font-body transition-all duration-200 cursor-pointer group px-3 py-2 rounded-lg ${
                  language === "pt"
                    ? "text-accent-600 bg-accent-50"
                    : "text-secondary-600 hover:text-accent-600"
                }`}
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-200">🇧🇷</span>
                <span className={`group-hover:underline ${language === "pt" ? "font-semibold" : ""}`}>
                  {t("language.portuguese")}
                </span>
              </button>
              <button
                onClick={() => handleLanguageChange("en")}
                className={`flex items-center gap-2 font-body transition-all duration-200 cursor-pointer group px-3 py-2 rounded-lg ${
                  language === "en"
                    ? "text-accent-600 bg-accent-50"
                    : "text-secondary-600 hover:text-accent-600"
                }`}
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-200">🇬🇧</span>
                <span className={`group-hover:underline ${language === "en" ? "font-semibold" : ""}`}>
                  We speak English
                </span>
              </button>
              <button
                onClick={() => handleLanguageChange("es")}
                className={`flex items-center gap-2 font-body transition-all duration-200 cursor-pointer group px-3 py-2 rounded-lg ${
                  language === "es"
                    ? "text-accent-600 bg-accent-50"
                    : "text-secondary-600 hover:text-accent-600"
                }`}
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-200">🇪🇸</span>
                <span className={`group-hover:underline ${language === "es" ? "font-semibold" : ""}`}>
                  {t("language.spanish")}
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Lado Direito - Slider de Fotos */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <ImageSlider
                images={[
                  "/images/bitupita/DJI_20251020022906_0211_D.jpg",
                  "/images/bitupita/DJI_20251020022923_0212_D.jpg",
                  "/images/bitupita/DJI_20251020023318_0221_D.jpg",
                  "/images/bitupita/DSC06870.jpg",
                ]}
                alt="Bitupitá - Paisagem paradisíaca"
                autoPlay={true}
                autoPlayInterval={50000}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}

